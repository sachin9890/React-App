import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {

    render() {
        return (
            <textarea
                name={this.props.name}
                className={this.props.customClasses}
                id={this.props.id}
                rows={this.props.rows}
                disabled={this.props.isReadOnly}
                onChange={this.props.onChange}>
            </textarea>
        )
    }
}

TextArea.propTypes = {
    customClasses: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    rows: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
}

TextArea.defaultProps = {
    customClasses: "form-control",
    placeholder: "",
    disabled: false,
    rows: "3"
};

export default TextArea;


