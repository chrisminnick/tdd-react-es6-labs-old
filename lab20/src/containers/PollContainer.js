import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: 'Welcome to the poll!',
            question: 'What is the best?',
            correctAnswer: 'Tacos',
            checkedValue: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log('current selection: ' + value);
    }

    render(){
        const choices = [
            {value: 'Tacos', label: 'Tacos'},
            {value: 'Pizza', label: 'Pizza'},
            {value: 'Cheese', label: 'Cheese'}
        ];

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
                            <RadioButtonGroup
                                name='answer'
                                checkedValue={this.state.checkedValue}
                                choices={choices}
                                onChange = {this.setCheckedValue} />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default PollContainer;