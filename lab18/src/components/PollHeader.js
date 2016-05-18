import React from 'react';

class PollHeader extends React.Component {
    render() {
        return (<h1>{this.props.text}</h1>);
    }
}

export default PollHeader;