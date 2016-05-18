import React from 'react';

class CurrentChoice extends React.Component {

    render(){
        return(
        <div>Current selection: {this.props.checked}</div>
        );
    }
}

export default CurrentChoice;