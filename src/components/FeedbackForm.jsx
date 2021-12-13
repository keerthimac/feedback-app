import { useState } from 'react';
import Card from "../shared/Card"
import Button from "../shared/Button";

function FeedbackForm() {
    const [text, setText] = useState("");

    //function for handling the change of the text
    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    return (
        <Card>
            <form action="">
                <h2>How would you rate us?</h2>
                {/* rating select component */}
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button type={'secondary'}>submit</Button>
                    {/* <button type="submit">Send</button> */}
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
