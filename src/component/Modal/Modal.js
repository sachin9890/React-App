import React from 'react';

export class Modal extends React.Component {
    render() {
        const modalVisible = {
            display: "block",
            backgroundColor: "rgba(0, 0, 0, .5)"
        };
        const modalWidth = {
            maxWidth:'700px'
        }
        return (
            this.props.show ? (<div className="modal" style={modalVisible} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document" style={modalWidth}>
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
        const scroll = {
            height: "80vh",
            overflow: "auto"
        };
        return (
            <div className="modal-body" style={scroll}>
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