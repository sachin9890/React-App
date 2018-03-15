import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        this.state = {};
    }

    onChange(e) {
        var state = {};
        var targetName = e.target.name;
        state[targetName] = e.target.value;
        this.setState(state);
    }

    textBox(ele) {
        return (
            <div className="form-group row">
                <label
                    htmlFor={ele.id}
                    className="col-sm-2 col-form-label">
                    {ele.title}
                </label>
                <div className="col-sm-10">
                    <input
                        type={ele.type}
                        name={ele.name}
                        className="form-control"
                        id={ele.id}
                        placeholder={ele.placeholder}
                        disabled={ele.isReadOnly}
                        onChange={this.onChange.bind(this)} />
                </div>
            </div>
        )
    }



    textArea(ele) {
        return (
            <div className="form-group row">
                <label
                    htmlFor={ele.id}
                    className="col-md-2 col-form-label">
                    {ele.title}
                </label>
                <textarea
                    name={ele.name}
                    className="form-control col-md-8"
                    id={ele.id}
                    rows="3"
                    disabled={ele.isReadOnly}
                    onChange={this.onChange.bind(this)}>
                </textarea>
            </div>
        )
    }

    checkBox(ele) {
        return (
            <div className="form-group row">
                <div className="col-sm-2">{ele.title}</div>
                <div className="col-sm-10">
                    {this.checkBoxOptions(ele.options)}
                </div>
            </div>
        )
    }

    checkBoxOptions(options) {
        return options.map((option) => {
            return (
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type={option.type}
                        name={option.groupName}
                        id={option.id} />
                    <label
                        className="form-check-label"
                        htmlFor={option.id}>
                        {option.title}
                    </label>
                </div>
            )
        });
    }

    select(ele) {
        return (
            <div className="form-group row">
                <label
                    htmlFor={ele.id}
                    className="col-sm-2 col-form-label">
                    {ele.title}
                </label>
                <select
                    name={ele.name}
                    className="col-md-4 form-control"
                    id={ele.id} disabled={ele.isReadOnly}
                    onChange={this.onChange.bind(this)}>
                    {this.selectOptions(ele.options)}
                </select>
            </div>
        )
    }

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

    submitBtn(ele) {
        return (
            <div className="form-group row">
                <div className="col-md-12">
                    <button
                        type={ele.type}
                        className="btn btn-primary float-right"
                        disabled={ele.isReadOnly}
                        onClick={() => this.props.onSubmitForm(this.state)}>
                        {ele.title}
                    </button>
                </div>
            </div>
        )
    }

    generateElement(data) {
        return data.map((ele) => {
            if (ele.type === 'text' || ele.type === 'email' || ele.type === 'password' || ele.type === 'number') {
                return this.textBox(ele);
            } else if (ele.type === 'textarea') {
                return this.textArea(ele);
            } else if (ele.type === 'checkbox' || ele.type === 'radio') {
                return this.checkBox(ele);
            } else if (ele.type === 'submit') {
                return this.submitBtn(ele);
            } else if (ele.type === 'select') {
                return this.select(ele);
            }
        });
    }

    render() {
        return (
            <form
                className="container"
                onSubmit={(e) => e.preventDefault()}>
                {this.generateElement(this.props.data)}
            </form>
        )
    }
}

export default Form;