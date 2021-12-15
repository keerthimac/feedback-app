//import context from './context';
import { createContext } from "react";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 5,
      text: "This is test 01",
    },
    {
      id: 2,
      rating: 6,
      text: "This is test 02",
    },
    {
      id: 3,
      rating: 7,
      text: "This is test 03",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //define add item function
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = new Date().valueOf(); // Instead in uuid
    setFeedback([newFeedback, ...feedback]);

    console.log("from app", newFeedback);
  };

  //define delete item functions in feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
    //console.log('App',id);
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update item
  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addNewFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
