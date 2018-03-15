import React from 'react';

export class Modal extends React.Component {
    render() {
        const modalVisible = {
            display: "block",
            backgroundColor: "rgba(0, 0, 0, .5)"
        };
        return (
            this.props.show ? (<div className="modal" style={modalVisible} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>) : null
        )
    }
}

export class ModalHeader extends React.Component {
    render() {
        return (
            <div className="modal-header">
                {this.props.children}
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={this.props.toggle}>&times;</span>
                </button>
            </div>
        )
    }
}

export class ModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        )
    }
}

export class ModalFooter extends React.Component {
    render() {
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        )
    }
}