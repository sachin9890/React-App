import React from 'react';

// Component Imports
import Table from '../component/Table';
import { Modal, ModalHeader, ModalBody } from '../component/Modal';
import Form from '../component/Form';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            evaluationType: '',
            formData:[{
                "id":"name",
                "type": "text",
                "placeholder": "Enter name",
                "name": "name",
                "title": "Name",
                "isReadOnly":false
              }]
        }
        this.closeModal = this.closeModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.formSubmitAction = this.formSubmitAction.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    showModal() {
        this.setState({
            showModal: true
        });
    }

    formSubmitAction() {
        console.log('form submitted', this.state.formData);
    }

    onChange(type) {
        this.setState({
            evaluationType: type
        });
    }

    render() {
        const data = [{
            name: 'Jitesh',
            exp: 3,
            cv: 'CV',
            evLink: 'EV',
            lOne: 'Pass'
        }];

        const columns = [{
            name: 'Name',
            accessor: 'name'
        }, {
            name: 'Yrs of Experience',
            accessor: 'exp'
        }, {
            name: 'CV Link',
            accessor: 'cv'
        }, {
            name: 'Evaluation Link',
            accessor: 'evLink'
        }, {
            name: 'L1 Result',
            accessor: 'lOne'
        }, {
            name: 'Evaluate',
            cell: <button className="btn btn-primary" onClick={this.showModal}>Evaluate</button>
        }];
        return (
            <div>
                <Table columns={columns} data={data} ></Table>
                <Modal show={this.state.showModal} onSuccess={this.formSubmitAction} >
                    <ModalHeader toggle={this.closeModal}>
                        <h5 className="modal-title">Evaluation Form</h5>
                    </ModalHeader>
                    <ModalBody>
                        <Form data={this.state.formData}></Form>
                    </ModalBody>
                </Modal>
                <form>
                    <input type="radio" name="evaluationType" checked={this.state.evaluationType === 'L1'} onChange={() => this.onChange('L1')} /><label>L1 Evaluation</label>
                    <input type="radio" name="evaluationType" checked={this.state.evaluationType === 'GK'} onChange={() => this.onChange('GK')} /><label>GK Evaluation</label>
                </form>
            </div>
        )
    }
}

export default Dashboard;