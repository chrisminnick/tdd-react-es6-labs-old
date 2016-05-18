import React from 'react';

class PollAnswer extends React.Component {
    render() {
        return (
            <div>
            <label>
                <input type="radio" name="answer"/> Answer
            </label>
            </div>
        );
    }
}

export default PollAnswer;


