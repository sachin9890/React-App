import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            sortedColumn: null
        };
        this.sort = this.sort.bind(this);
    }

    sort(col) {
        let temp = {
            data: [...this.props.data],
            sortedColumn: null
        };
        if (this.state.sortedColumn === null ||
            (this.state.sortedColumn !== null &&
                (this.state.sortedColumn.order === -1 || this.state.sortedColumn.header !== col.header))) {
            temp = {
                data: temp.data.sort((a, b) => {
                    return a[col.accessor] > b[col.accessor];
                }),
                sortedColumn: {
                    header: col.header,
                    order: 1
                }
            };
        } else {
            temp = {
                data: temp.data.sort((a, b) => {
                    return a[col.accessor] < b[col.accessor];
                }),
                sortedColumn: {
                    header: col.header,
                    order: -1
                }
            };
        }

        this.setState({
            data: [...temp.data],
            sortedColumn: temp.sortedColumn
        });
    }

    render() {

        const TableHeadComponent = this.props.columns.map((col, index) => {
            return (<th scope="col" key={index}>
                {col.header ? col.header : col.headerCell} {col.sortable ?
                    <i className={`fa ${this.state.sortedColumn === null ||
                        (this.state.sortedColumn !== null && (this.state.sortedColumn.order === 0 || this.state.sortedColumn.header !== col.header)) ?
                        'fa-sort' : (this.state.sortedColumn.order > 0 ? 'fa-sort-asc' : 'fa-sort-desc')}`} onClick={() => this.sort(col)} aria-hidden="true"></i> : null}</th>)
        });

        const TableBodyColumn = (columns, obj) => {
            return columns.map((bcell, I) => {
                return (<td key={I}>{bcell.accessor ? obj[bcell.accessor] : bcell.cell(obj)}</td>);
            });
        }

        const TableBodyComponent = this.state.data.map((dataObj, i) => {
            return (<tr key={i} >{TableBodyColumn(this.props.columns, dataObj)}</tr>)
        });
        return (
            <div>
                {this.state.sortedColumn ? this.state.sortedColumn.order + ' ' + this.state.sortedColumn.header : 'null'}
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
            </div>
        )
    }
}

export default Table;