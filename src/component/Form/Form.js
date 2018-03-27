import React, { Component } from 'react';
import { Label, Input, TextArea, Select } from '../FormElements';
import Button from '../Button';
import FormError from '../Error';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            showErr: false
        };
    }

    onChange(e) {
        let data = JSON.parse(JSON.stringify(this.state.data));
        data.forEach(d => {
            if (e.target.name === d.name) {
                d.value = e.target.value;
            }
        });
        this.setState({ data });
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
                        value={ele.value}
                        onChange={this.onChange.bind(this)} />
                    <FormError message="Please enter the required field" show={this.state.showErr && !ele.value} />
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
                    <FormError message="Please enter the required field" show={this.state.showErr && !ele.value} />
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
                    <FormError message="Please enter the required field" show={this.state.showErr && !ele.value} />
                </div>
            </div>
        )
    }

    onClickAction() {
        if (this.isFormEmpty()) {
            this.setState({ showErr: true });
        } else {
            this.setState({ show: false });
            this.props.onSubmitForm(this.state.data);
        }
    }

    isFormEmpty() {
        return this.state.data.some(d => !d.value);
    }

    submitBtn() {
        return (
            <div className="form-group row">
                <div className="col-md-12">
                    <Button label="Cancel" onClickAction={this.props.onCancelForm} customClasses="btn btn-secondary float-left" />
                    <Button label="Submit" onClickAction={this.onClickAction.bind(this)} customClasses="btn btn-primary float-right" />
                </div>
            </div>
        )
    }

    addLink(ele, i) {
        return (
            <div key={i} className="form-group row">
                {this.addLabel(ele)}
                <div className="col-sm-10" style={{ paddingTop: '7px' }}>
                    <a href={ele.value} target={ele.target}>{ele.linkTitle}</a>
                </div>
            </div>
        )
    }

    addLabel(ele) {
        return (
            <Label
                id={ele.id}
                customClasses={ele.classes}
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
            <form name={this.props.name}
                className="container"
                onSubmit={(e) => e.preventDefault()} noValidate>
                {this.generateElement(this.state.data)}
                {this.submitBtn()}
            </form>
        )
    }
}

export default Form;