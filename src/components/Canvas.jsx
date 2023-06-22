import React, { useEffect, useRef } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import '../App.css';

//EXPRESSES THE STATE OF GRID
const Canvas = ({ grid, isMouseDown, isDrawing, drawingColor, handleOnMouseOver, handleOnMouseDown, handleOnMouseUp, isCanvasMode }) => {

  const handleMouseOver = (rowIndex, columnIndex) => {
    if (isMouseDown) {
      if (isDrawing) {
        //DRAW
        handleOnMouseOver(rowIndex, columnIndex, drawingColor);
      } else {
        //ERASE
        handleOnMouseOver(rowIndex, columnIndex, 'white');
      }
    }
  };

  const handleMouseDown = (rowIndex, columnIndex) => {
      if (isDrawing) {
        //DRAW
        handleOnMouseDown(rowIndex, columnIndex, drawingColor);
      } else {
        //ERASE
        handleOnMouseDown(rowIndex, columnIndex, 'white');
      }
  }
  return (
    <Table>
      <TableBody>
        {grid.map((row, rowIndex) => (
          <TableRow>
  {row.map((cellColor, columnIndex) => (
    <TableCell
      key={`${rowIndex}-${columnIndex}`}
      onMouseOver={() => handleMouseOver(rowIndex, columnIndex)}
      // onMouseDown={(cellKey) => handleOnMouseDown(cellKey)} 
      onMouseDown={() => handleMouseDown(rowIndex,columnIndex)}
      onMouseUp={handleOnMouseUp}
      style={{
        backgroundColor: cellColor,
        border: '3px solid black',
        boxSizing: 'border-box',
        width: '.01%',
        whiteSpace: 'nowrap',
      }}
      className="grid-cell"
    ></TableCell>
  ))}
</TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Canvas;