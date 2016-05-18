import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import PollAnswer from '../components/PollAnswer';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'Welcome to the poll!',
            question: 'What is the best?',
            answer1: 'Tacos',
            answer2: 'Pizza',
            answer3: 'Cheese',
            correctAnswer: 'Tacos'
        };
    }
    render(){
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question} />
                            <PollAnswer text={this.state.answer1} />
                            <PollAnswer text={this.state.answer2} />
                            <PollAnswer text={this.state.answer3} />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default PollContainer;