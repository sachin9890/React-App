import React from 'react';

// Component Imports
import Table from '../component/Table';
import { Modal, ModalHeader, ModalBody } from '../component/Modal';
import Form from '../component/Form';

// JSON Imports
import formData from '../data/form-data.json';
import userData from '../data/table-data.json';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            evaluationType: '',
            formData: formData
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

    formSubmitAction(name) {
        console.log('form submitted', name);
    }

    onChange(type) {
        this.setState({
            evaluationType: type
        });
    }

    render() {
        const data = userData.data;

        const columns = [{
            header: 'Name',
            accessor: 'name',
            sortable: true
        }, {
            header: 'Yrs of Experience',
            accessor: 'exp',
            sortable: true
        }, {
            header: 'CV Link',
            cell: (rowData) => {
                return <a href="#" target="_blank">{`CV_${rowData.name}`}</a>
            }
        }, {
            header: 'Evaluation Link',
            cell: (rowData) => {
                return <a href="#" target="_blank">{`EV_${rowData.name}`}</a>
            }
        }, {
            header: 'L1 Result',
            cell: (rowData) => {
                return <span className={`badge ${rowData.lOne === 'Pass' ? 'badge-success' : 'badge-danger'}`}>{rowData.lOne}</span>
            }
        }, {
            header: 'Evaluate',
            cell: (rowData) => {
                return <button className="btn btn-primary" onClick={this.showModal}>Evaluate</button>
            }
        }];
        return (
            <div>
                <Table columns={columns} data={data} ></Table>
                <Modal show={this.state.showModal} onSuccess={this.formSubmitAction} >
                    <ModalHeader toggle={this.closeModal}>
                        <h5 className="modal-title">Evaluation Form</h5>
                    </ModalHeader>
                    <ModalBody>
                        <Form data={this.state.formData} onSubmitForm={this.formSubmitAction.bind(this)}></Form>
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