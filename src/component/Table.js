import React from 'react';
import { Link } from 'react-router-dom';

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            evaluationType: ''
        };
        this.onChange = this.onChange.bind(this);
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
            cell: <Link to={`/form/${this.state.evaluationType}`} className="btn btn-primary">Evaluate</Link>
        }];

        const TableHeadComponent = columns.map((col, index) => {
            return (<th scope="col" key={index}>{col.name}</th>)
        });

        const TableBodyColumn = (columns, obj) => {
            return columns.map((bcell, I) => {
                return (<td key={I}>{bcell.accessor ? obj[bcell.accessor] : bcell.cell}</td>);
            });
        }

        const TableBodyComponent = data.map((dataObj, i) => {
            return (<tr key={i} >{TableBodyColumn(columns, dataObj)}</tr>)
        });
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {TableHeadComponent}
                        </tr>
                    </thead>
                    <tbody>
                        {TableBodyComponent}
                    </tbody>
                </table>
                <form>
                    <input type="radio" name="evaluationType" checked={this.state.evaluationType === 'L1'} onChange={() => this.onChange('L1')} /><label>L1 Evaluation</label>
                    <input type="radio" name="evaluationType" checked={this.state.evaluationType === 'GK'} onChange={() => this.onChange('GK')} /><label>GK Evaluation</label>
                </form>
            </div>
        )
    }
}

export default Table;