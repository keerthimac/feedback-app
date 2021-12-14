import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";



function App() {
    //define state for main app
    const [feedback, setFeedback] = useState(FeedbackData);

    //define add item function via props drilling with uuid
    const addNewFeedback = (newFeedback) => {
        newFeedback.id = new Date().valueOf(); // Instead in uuid
        setFeedback([newFeedback, ...feedback]);

        console.log('from app', newFeedback);
    }


    //define delete item functions in feedback item component via props drilling
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter(feedback => feedback.id !== id));
        }
        //console.log('App',id);
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addNewFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App;