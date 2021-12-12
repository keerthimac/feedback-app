import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";


function App() {
//define state
    const [feedback, setFeedback] = useState(FeedbackData);

    
//define functions
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter(feedback => feedback.id !== id));
        }        
        //console.log('App',id);
    }

 return (
     <>
    <Header />
    <div className="container">
    <FeedbackStats feedback={feedback} />
       <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
    )
}

export default App;