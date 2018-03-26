import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                className={this.props.customClasses}
                id={this.props.id}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
                onChange={this.props.onChange}
                required={this.props.required} />
        )
    }
}

Input.propTypes = {
    customClasses: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    customClasses: "form-control",
    placeholder: "",
    disabled: false,
    required: false
};

export default Input;
