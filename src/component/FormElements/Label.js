import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <label
                htmlFor={this.props.id}
                className="col-sm-2 col-form-label">
                {this.props.title}
            </label>
        )
    }
}

export default Label; 