import React from 'react';

// Component Imports
import Table from '../component/Table';
import { Modal, ModalHeader, ModalBody } from '../component/Modal';
import Form from '../component/Form';
import Button from '../component/Button';

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
        };

        this.data = userData.data; // Temporary data

        this.colHeaders = [{
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
                return <a href={rowData.resume} target="_blank">{`CV_${rowData.name}`}</a>
            }
        }, {
            header: 'Evaluation Link',
            cell: (rowData) => {
                return <a href={rowData.evaluation} target="_blank">{`EV_${rowData.name}`}</a>
            }
        }, {
            header: 'L1 Result',
            cell: (rowData) => {
                return <span className={`badge ${rowData.lOne === 'Pass' ? 'badge-success' : 'badge-danger'}`}>{rowData.lOne}</span>
            }
        }, {
            header: 'Evaluate',
            cell: (rowData) => {
                return <Button label="Evaluate" onClickAction={() => {this.toggleModal(); this.transformData(rowData)}} customClasses="btn btn-primary" />
            }
        }];
        this.toggleModal = this.toggleModal.bind(this);
        this.formSubmitAction = this.formSubmitAction.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    formSubmitAction(data) {
        this.toggleModal();
        console.log('form submitted', data);
    }

    transformData(data) {
        formData.forEach(formField => {
            for(let userAttr in data) {
                if(userAttr === formField.name) {
                    formField.value = data[userAttr];
                }
            }
        }, this);
        this.setState({ formData: formData });
    }

    onChange(type) {
        this.setState({
            evaluationType: type
        });
    }

    render() {
        return (
            <div>
                <Table columns={this.colHeaders} data={this.data} ></Table>
                <Modal show={this.state.showModal} >
                    <ModalHeader toggle={this.toggleModal}>
                        <h5 className="modal-title">Evaluation Form</h5>
                    </ModalHeader>
                    <ModalBody>
                        <Form name="evaluationForm" data={this.state.formData} onSubmitForm={this.formSubmitAction} onCancelForm={this.toggleModal}></Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Dashboard;