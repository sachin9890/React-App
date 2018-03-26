import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={props.customClasses}
            onClick={props.onClickAction}>
            {props.label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    customClasses: PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired
};

Button.defaultProps = {
    label: '',
    customClasses: ''
};

export default Button;