import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback,handleDelete}) {
    if(!feedback||feedback.length===0) 
    return <p>No feedback yet</p>
    
    return (
        <div className="feedback-list">
            {feedback.map(item => (
                <FeedbackItem 
                key={item.id}
                item={item}
                handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

//define prop types.SHAPE is a prop type that is a shape of an object
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })).isRequired
}

export default FeedbackList