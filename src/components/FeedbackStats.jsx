//import use context
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //calculate the average
  const average =
    feedback.reduce((total, current) => total + current.rating, 0) /
    feedback.length;
  //set Nan to 0
  const averageRounded = average ? Math.round(average * 10) / 10 : 0;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {averageRounded}</h4>
    </div>
  );
}

export default FeedbackStats;
