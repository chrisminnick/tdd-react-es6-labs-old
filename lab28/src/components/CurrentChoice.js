import React from 'react';

function CurrentChoice(props){
    return(<div>Current selection: {props.checked}</div>);
}

CurrentChoice.propTypes = {
    checked: React.PropTypes.string
};

export default CurrentChoice;