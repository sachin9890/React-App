import React, { Component } from 'react';

class Form extends Component {

    textBox(ele) {
        return (
            <div className="form-group row">
                <label for={ele.id} className="col-sm-2 col-form-label">{ele.title}</label>
                <div className="col-sm-10">
                    <input type={ele.type} className="form-control" id={ele.id} placeholder={ele.placeholder} disabled={ele.isReadOnly} />
                </div>
            </div>
        )
    }

    textArea(ele) {
        return (
            <div className="form-group row">
                <label for={ele.id} className="col-md-2 col-form-label">{ele.title}</label>
                <textarea className="form-control col-md-8" id={ele.id} rows="3" disabled={ele.isReadOnly}></textarea>
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
                    <input className="form-check-input" type={option.type} name={option.groupName} id={option.id} />
                    <label className="form-check-label" for={option.id}>
                        {option.title}
                    </label>
                </div>
            )
        });

    }

    select(ele) {
        return (
            <div className="form-group row">
                <label for={ele.id} className="col-sm-2 col-form-label">{ele.title}</label>
                <select className="col-md-4 form-control" id={ele.id} disabled={ele.isReadOnly}>
                    {this.selectOptions(ele.options)}
                </select>
            </div>
        )
    }

    selectOptions(opts) {
        return opts.map((opt) => {
            return <option selected={opt.selected}>{opt.label}</option>
        });
    }

    submitBtn(ele) {
        return (
            <div className="form-group row">
                <div className="col-md-12">
                    <button type={ele.type} className="btn btn-primary float-right" disabled={ele.isReadOnly}>{ele.title}</button>
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
            <form className="container">{this.generateElement(this.props.data)}</form>
        )
    }
}

export default Form;