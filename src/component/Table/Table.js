import React from 'react';

class Table extends React.Component {
    render() {

        const TableHeadComponent = this.props.columns.map((col, index) => {
            return (<th scope="col" key={index}>{col.name} {col.sortable ? <span>Icon</span> : null}</th>)
        });

        const TableBodyColumn = (columns, obj) => {
            return columns.map((bcell, I) => {
                return (<td key={I}>{bcell.accessor ? obj[bcell.accessor] : bcell.cell}</td>);
            });
        }

        const TableBodyComponent = this.props.data.map((dataObj, i) => {
            return (<tr key={i} >{TableBodyColumn(this.props.columns, dataObj)}</tr>)
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
            </div>
        )
    }
}

export default Table;