import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = (props) => {
    return (
        <div className="modal-header">
            {props.children}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true" onClick={props.toggle}>&times;</span>
            </button>
        </div>
    )
}

ModalHeader.propTypes = {
    toggle: PropTypes.func.isRequired,
    children: PropTypes.element
};

export default ModalHeader;