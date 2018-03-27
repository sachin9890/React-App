import React from 'react';
import PropTypes from 'prop-types';

const FormError = (props) => {
    return (
        props.show ? <span className="error">{props.message}</span> : null
    )
}

FormError.defaultProps = {
    message: "",
    show: false
}

FormError.propTypes = {
    message: PropTypes.string,
    show: PropTypes.bool
}

export default FormError;