import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <p>No feedback yet</p>;

  //With Animation version
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //Without Animation version

  // return (
  //     <div className="feedback-list">
  //         {feedback.map(item => (
  //             <FeedbackItem
  //                 key={item.id}
  //                 item={item}
  //                 handleDelete={handleDelete}
  //             />
  //         ))}
  //     </div>
  // )
}

//define prop types.SHAPE is a prop type that is a shape of an object
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FeedbackList;
