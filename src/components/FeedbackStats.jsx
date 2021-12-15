import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
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

//define prop types
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
