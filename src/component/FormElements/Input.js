import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    render() {
        return (
            <div>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className={this.props.customClasses}
                    id={this.props.id}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    onChange={this.props.onChange}
                    required={this.props.required} />
            </div>
        )
    }
}

Input.propTypes = {
    customClasses: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorMsg: PropTypes.string
}

Input.defaultProps = {
    customClasses: "form-control",
    placeholder: "",
    value: "",
    disabled: false,
    required: false,
    errorMsg: "Please enter the required field"
};

export default Input;
