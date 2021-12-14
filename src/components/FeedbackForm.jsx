import { useState } from 'react';
import Card from "../shared/Card"
import Button from "../shared/Button";
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState("");
    //button disabled if text is empty
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //set message until 10 characters
    const [message, setMessage] = useState('');
    //state for rating
    const [rating, setRating] = useState(1);



    //validation for button and characters and state
    const handleTextChange = (event) => {
        //if text state empty set button disabled to true
        if (event.target.value.length === 0) {
            setButtonDisabled(true);
            setMessage(null)
        } else if (event.target.value.length <= 10) {
            setMessage("Please enter at least 10 characters")
        } else if (event.target.value.length > 10) {
            setButtonDisabled(false);
            setMessage(null)
        }
        setText(event.target.value);
    };

    //function for catch rate select state from prop drilling
    const select = (rating) => {
        setRating(rating);
    };

    //function for submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText("");
        }
    };


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate us?</h2>
                <RatingSelect select={select} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button isDisabled={buttonDisabled} type='submit'>
                        Send
                    </Button>
                    {/* <button type="submit">Send</button> */}
                </div>

                {message && <div className='message'>{message}</div>}

            </form>
        </Card>
    )
}

export default FeedbackForm
