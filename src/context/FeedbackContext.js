//import context from './context';
import { createContext } from "react";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 5,
      text: "This is coming from the provider",
    },
  ]);

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

  return (
    <FeedbackContext.Provider
      value={{ feedback, addNewFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
