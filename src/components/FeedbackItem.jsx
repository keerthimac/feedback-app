import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../shared/Card";
//import usecontext
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  console.log(feedbackEdit);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className='close'
        disabled={feedbackEdit.edit}>
        <FaTimes className={`btn-delete-${feedbackEdit.color}`} />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

//define prop types
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
