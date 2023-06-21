import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import '../App.css'

const Canvas = ({grid, isMouseDown, isDrawing,}) => {

    const handleOnMouseOver = (e) => {
        if (isMouseDown){
            if (isDrawing){
                let cells = e.target;
                if (cells.classList[0] == "grid-cell")
                    cells.style.backgroundColor = pickedColor;
            } else {
                let cell = e.target;
                if (cell.classList[0] == "grid-cell")
                    cell.style.backgroundColor = "white";
            }
        }
    }

    return (
        <div style={{border: '2px solid black'}} onMouseOver={(e) => handleOnMouseOver(e)}>
            <TableContainer className="grid-container">
                <Table>
                    <TableBody>
                            {grid}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Canvas