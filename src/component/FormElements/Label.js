import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    return (
        <label
            htmlFor={props.id}
            className={props.customClasses}>
            {props.title}
        </label>
    )
}


Label.propTypes = {
    title: PropTypes.string.isRequired,
    customClasses: PropTypes.string,
    id: PropTypes.string.isRequired
}


Label.defaultProps = {
    customClasses: "col-sm-2 col-form-label",
    title: ""
}

export default Label; 