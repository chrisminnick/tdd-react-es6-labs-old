import React from 'react';
import RadioButton from './RadioButton';
import CurrentChoice from './CurrentChoice';

class RadioButtonGroup extends React.Component {
    render(){

        const choiceItems = this.props.choices.map(choice => {
            const {value, label} = choice;
            const checked = value === this.props.checkedValue;

            return (
                <RadioButton
                    key={`radio-button-${value}`}
                    label={label}
                    name={this.props.name}
                    value={value}
                    checked={checked}
                    onChange={this.props.onChange}
                    />
            );
        });

        return (
            <div>
                {choiceItems}
                <CurrentChoice checked={this.props.checkedValue} />
            </div>
        );

    }
}

export default RadioButtonGroup;