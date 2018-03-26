import React from 'react';
import PropTypes from 'prop-types';

function getModal(props) {
    const modalWidth = {
        maxWidth: props.width
    };

    return (<div className="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document" style={modalWidth}>
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    </div>);
}

const Modal = (props) => {
    return (
        props.show ? getModal(props) : null
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};

Modal.defaultProps = {
    width: '700px',
    show: false
};

export default Modal;