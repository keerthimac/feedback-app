import { useState } from 'react';
import Card from "../shared/Card"
import Button from "../shared/Button";

function FeedbackForm() {
    const [text, setText] = useState("");
    //button disabled if text is empty
    const [buttonDisabled, setButtonDisabled] = useState(true);
    //set message until 10 characters
    const [message, setMessage] = useState('');

    
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

    return (
        <Card>
            <form action="">
                <h2>How would you rate us?</h2>
                {/* rating select component */}
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
