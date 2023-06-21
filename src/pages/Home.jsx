import React, { useState, useEffect, useRef } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useMediaQuery } from '@mui/material'
import '../App.css'

export default function Home() {

  const canvasRef = useRef(null)
  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [grid, setGrid] = useState([]);
  const [isColorPicked, setIsColorPicked] = useState(true)
  const [selectedColor, setSelectedColor] = useState('#FF6F61')
  const [isDrawing, setIsDrawing] = useState(false);
  const [isMouseDown,setIsMouseDown] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 900px')
  const isMediumScreen = useMediaQuery('(max-width: 1200px)')
  const isExtraLargeScreen = useMediaQuery('(min-width: 1250px)')

  useEffect(() => {
    generateGrid();
  }, [numRows, numColumns]);

  const handleAddRow = () => {
    if (numColumns === 0) {
      setNumColumns(1);
    }
    setNumRows(numRows + 1);
  };

  const handleAddColumn = () => {
    if (numRows === 0) {
      setNumRows(1);
    }
    setNumColumns(numColumns + 1);
  };

  const handleRemoveRow = () => {
    setNumRows(numRows - 1);
  };

  const handleRemoveColumn = () => {
    setNumColumns(numColumns - 1);
  };

   const handlePickColor = () => {
            setIsColorPicked(true);
            setDrawingColor(selectedColor);
        }

  const handleSetColor = (newColor) => {
        setSelectedColor(newColor.hex)
        setIsColorPicked(false)
    }

  const handleMouseDown = () => {
    setIsMouseDown(true);
  }

  const handleMouseUp = () => {
    setIsMouseDown(false);
  }

  //MAKE NEW GRID ON RENDER
  const generateGrid = () => {
  const rows = [];
  const cellWidth = numRows > 0 && numColumns > 0 ? 600 / numColumns : 0;
  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numColumns; j++) {
      //MAKE NEW CELL AND PUSH INTO ARRAY
      cells.push(
        <TableCell key={j} className="grid-cell">
        </TableCell>
      );
    }
    //PUT THE TABLE ROWS INTO AN ARRAY
    rows.push(<TableRow sx={{flexShrink:1, minWidth: 'auto'}}key={i}>{cells}</TableRow>);
  }
  setGrid(rows);
};


    return (
        <div id="home">
            <Grid container spacing={2}  sx={{border: "4px solid black", height:'100vh'}} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
              {/* HELPBAR=ON */}
              <Grid item xs={0.03}>
                  <com.Helpbar />
              </Grid>
              <Grid item xs={2.7}>
              {/* COLOR PICKER UTIL */}
                <com.ColorPicker isColorPicked={isColorPicked} handlePickColor={handlePickColor} selectedColor={selectedColor} handleSetColor={handleSetColor} isSmallScreen={isSmallScreen} isExtraLargeScreen={isExtraLargeScreen} ref={canvasRef}/>
              </Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={6}>
                  <com.Canvas grid={grid} isMouseDown={isMouseDown} isDrawing={isDrawing} selectedColor={selectedColor}/>
              </Grid>
              {/* GRID BUILDER UTIL*/}
              <Grid item xs={3} sx={{ minWidth: '300px'}}>
                  <com.Toolbar handleAddRow={handleAddRow} handleAddColumn={handleAddColumn} handleRemoveRow={handleRemoveRow} handleRemoveColumn={handleRemoveColumn} isDrawing={isDrawing} setIsDrawing={setIsDrawing} ref={canvasRef}/>
              </Grid>
            </Grid>
        </div>
    )
}