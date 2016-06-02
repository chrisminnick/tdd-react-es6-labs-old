import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';
import $ from 'jquery';
import { Provider } from 'react-redux';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkedValue: '',
            header: '',
            question: '',
            choices: []
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        console.log('current selection: ' + value);
    }

    checkAnswer(value){
        if (value===this.state.correctAnswer){
            console.log('correct');
        }
    }



    componentWillMount() {
        console.log('componentWillMount()');
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8000/data/data.json', function (result) {
            var data = result;
            this.setState({
                header: data.poll.header,
                question: data.poll.questions[0].question,
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }


    componentWillReceiveProps() {
        console.log('componentWillReceiveProps()');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate()');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
        this.checkAnswer(this.state.checkedValue);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render(){
        this.props.store.subscribe(() => {
            this.setState({checkedValue: this.props.store.getState()});
            console.log(this.props.store.getState());
        });

        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return (
            <Provider store={this.props.store}>
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
                                choices={this.state.choices}
                                onChange = {(value) => this.props.store.dispatch({ type: 'SELECT', selected: value })} />
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>

            </Provider>
        );
    }

}


export default PollContainer;