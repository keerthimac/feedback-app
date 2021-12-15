import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  //define state for main app
  const [feedback, setFeedback] = useState(FeedbackData);

  //define add item function via props drilling with uuid
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = new Date().valueOf(); // Instead in uuid
    setFeedback([newFeedback, ...feedback]);

    console.log("from app", newFeedback);
  };

  //define delete item functions in feedback item component via props drilling
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
    //console.log('App',id);
  };

  return (
    <Router>
      <Header />

      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addNewFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
