import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DataTable = ({ headerRow, dataRows }) => {
    const tableHeader = headerRow.map((row, rowIndex) => {
        return (<TableRow key={`row-${rowIndex}`}>
            <TableCell>
                {row}
            </TableCell>
        </TableRow>)
    })

    const tableData = dataRows.map((row, rowIndex) => {
        return (<TableRow key={`row-${rowIndex}`}>
            {row.map((cell, index) => {
                return (
                    <TableCell key={`row-${rowIndex}-cell-${index}`} >
                        {cell}
                    </TableCell>
                )
            })}
        </TableRow>)
    })

    return (
        <TableContainer component={Paper}>
            <Table className={'data-table'} aria-label="simple table">
                <TableHead>
                    {tableHeader}
                </TableHead>
                <TableBody>
                    {tableData}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable