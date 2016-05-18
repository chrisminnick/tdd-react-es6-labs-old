import React from 'react';

class PollQuestion extends React.Component {
    render() {
        return (<h2>{this.props.text}</h2>);
    }
}

export default PollQuestion;