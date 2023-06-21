import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import '../App.css'

const Canvas = ({grid}) => {

    return (
        <div style={{border: '2px solid black'}}>
            <TableContainer className="table-container">
                <Table sx={{ }}>
                    <TableBody>
                            {grid}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Canvas