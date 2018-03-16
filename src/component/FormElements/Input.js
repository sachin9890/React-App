import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    render() {
        return (
            <input
                type={this.props.type}
                name={this.props.name}
                className={this.props.classes}
                id={this.props.id}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
                onChange={this.props.onChange} />
        )
    }
}

Input.propTypes = {
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

Input.defaultProps = {
    classes:"form-control",
    placeholder:"",
    disabled:false            
};

export default Input;
