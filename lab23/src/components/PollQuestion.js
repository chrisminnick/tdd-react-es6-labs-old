import React from 'react';

class PollQuestion extends React.Component{
    render(){
        return(<h2>{this.props.text}</h2>);
    }
}
PollQuestion.propTypes = {
    text: React.PropTypes.string
};

export default PollQuestion;