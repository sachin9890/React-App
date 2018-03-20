import React, { Component } from 'react';
import { Label, Input, TextArea, Select } from '../FormElements';

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

    textBox(ele, i) {
        return (
            <div key={i} className="form-group row">
                {this.addLabel(ele)}
                <div className="col-sm-10">
                    <Input
                        type={ele.type}
                        name={ele.name}
                        id={ele.id}
                        placeholder={ele.placeholder}
                        disabled={ele.isReadOnly}
                        required={ele.required}
                        onChange={this.onChange.bind(this)} />
                </div>
            </div>
        )
    }



    textArea(ele, i) {
        return (
            <div key={i} className="form-group row">
                {this.addLabel(ele)}
                <div className="col-sm-10">
                    <TextArea
                        name={ele.name}
                        id={ele.id}
                        disabled={ele.isReadOnly}
                        onChange={this.onChange.bind(this)}>
                    </TextArea>
                </div>
            </div>
        )
    }

    checkBox(ele, i) {
        return (
            <div key={i} className="form-group row">
                <div className="col-sm-2">{ele.title}</div>
                <div className="col-sm-10">
                    {this.checkBoxOptions(ele.options)}
                </div>
            </div>
        )
    }

    checkBoxOptions(options) {
        return options.map((option, oindex) => {
            return (
                <div key={oindex} className="form-check">
                    <input
                        className="form-check-input"
                        type={option.type}
                        name={option.groupName}
                        id={option.id} />
                    {this.addLabel(option)}
                </div>
            )
        });
    }

    select(ele, i) {
        return (
            <div key={i} className="form-group row">
                {this.addLabel(ele)}
                <div className="col-sm-10">
                    <Select
                        name={ele.name}
                        id={ele.id} disabled={ele.isReadOnly}
                        required={ele.required}
                        onChange={this.onChange.bind(this)} options={ele.options}>
                    </Select>
                </div>
            </div>
        )
    }

    submitBtn() {
        return (
            <div className="form-group row">
                <div className="col-md-12">
                    <button
                        className="btn btn-secondary float-left"
                        onClick={this.props.onCancelForm}>
                        {'Cancel'}
                    </button>
                    <button
                        type="submit"
                        className="btn btn-primary float-right"
                        onClick={() => this.props.onSubmitForm(this.state)}>
                        {'Submit'}
                    </button>
                </div>
            </div>
        )
    }

    addLink(ele, i) {
        return (
            <div key={i} className="form-group row">
                {this.addLabel(ele)}
                <div className="col-sm-10" style={{ paddingTop: '7px' }}>
                    <a href={ele.address} target={ele.target}>{ele.linkTitle}</a>
                </div>
            </div>
        )
    }

    addLabel(ele) {
        return (
            <Label
                id={ele.id}
                classes={ele.classes}
                title={ele.title}>
            </Label>
        )
    }

    generateElement(data) {
        return data.map((ele, eindex) => {
            let res = null;
            switch (ele.type) {
                case 'text':
                case 'email':
                case 'password':
                case 'number': res = this.textBox(ele, eindex);
                    break;
                case 'textarea': res = this.textArea(ele, eindex);
                    break;
                case 'checkbox':
                case 'radio': res = this.checkBox(ele, eindex);
                    break;
                case 'select': res = this.select(ele, eindex);
                    break;
                case 'link': res = this.addLink(ele, eindex);
                    break;
                default: break;

            }
            return res;
        });
    }

    render() {
        return (
            <form
                className="container"
                onSubmit={(e) => e.preventDefault()}>
                {this.generateElement(this.props.data)}
                {this.submitBtn()}
            </form>
        )
    }
}

export default Form;