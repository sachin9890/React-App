import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            sortedColumn: null
        };
        this.sort = this.sort.bind(this);
    }

    getTableHeader() {
        const cursorStyle = {
            cursor: 'pointer'
        };
        return this.props.columns.map((col, index) => {
            return (<th scope="col" key={index}>
                {col.header ? col.header : col.headerCell} {col.sortable ?
                    <i style={cursorStyle} className={`fa ${this.state.sortedColumn === null ||
                        (this.state.sortedColumn !== null && (this.state.sortedColumn.order === 0 || this.state.sortedColumn.header !== col.header)) ?
                        'fa-sort' : (this.state.sortedColumn.order > 0 ? 'fa-sort-asc' : 'fa-sort-desc')}`} onClick={() => this.sort(col)} aria-hidden="true"></i> : null}</th>)
        });
    }

    getTableRow() {
        return this.state.data.map((dataObj, i) => {
            return (<tr key={i} >{this.getTableCell(this.props.columns, dataObj)}</tr>)
        });
    }

    getTableCell(columns, obj) {
        return columns.map((bcell, I) => {
            return (<td key={I}>{bcell.accessor ? obj[bcell.accessor] : bcell.cell(obj)}</td>);
        });
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
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            {this.getTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTableRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function checkColumn(props, propName, componentName) {
    const requiredHeaderAttr = ['header', 'headerCell'];
    const requiredCellAttr = ['accessor', 'cell'];

    if (!(propName in props)) {
        return new Error(`Prop ${propName} is not supplied`);
    }

    if (props[propName].length < 1) {
        return new Error(`${propName} cannot be empty`);
    }

    return props[propName].every(propObj => {
        return (requiredHeaderAttr.some(attr => {
            return Object.keys(propObj).indexOf(attr) > -1;
        }) && requiredCellAttr.some(attr => {
            return Object.keys(propObj).indexOf(attr) > -1;
        }));
    }) ? null : new Error("Required attr missing: Either of header or headerCell or accessor or cell");
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    columns: checkColumn
}

Table.defaultProps = {
    sortable: false
}

export default Table;