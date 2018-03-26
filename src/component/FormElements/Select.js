import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    selectOptions(opts) {
        return opts.map((opt, index) => {
            return (
                <option
                    key={index}
                    value={opt.label}>
                    {opt.label}
                </option>
            )
        });
    }

    render() {
        return (
            <select
                name={this.props.name}
                className={this.props.customClasses}
                id={this.props.id} disabled={this.props.isReadOnly}
                onChange={this.props.onChange}>
                {this.selectOptions(this.props.options)}
            </select>
        )
    }
}

Select.propTypes = {
    customClasses: PropTypes.string,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

Select.defaultProps = {
    customClasses: "form-control",
    required: false
};

export default Select;


