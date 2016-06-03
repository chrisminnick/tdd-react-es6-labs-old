import React from 'react';

class RadioButton extends React.Component {


    handleChange() {
        this.props.onChange(this.props.name,this.props.value);
    }
    render() {
        return (
            <div className="radio">
                <label>
                    <input
                        type='radio'

                        name={this.props.name}
                        value={this.props.value}
                        checked={this.props.checked}
                        onChange={this.handleChange.bind(this)}

                        />
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
    }
}

RadioButton.propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func
};

export default RadioButton;