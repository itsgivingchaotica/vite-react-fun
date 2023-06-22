import React, { useState, useEffect, useRef } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useMediaQuery } from '@mui/material'
import '../App.css'

export default function Home({ref}) {

  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [grid, setGrid] = useState([]);
  const [isColorPicked, setIsColorPicked] = useState(true)
  const [isCanvasMode, setIsCanvasMode] = useState(false)
  const [cellColors,setCellColors] = useState({})
  const [selectedColor, setSelectedColor] = useState('#FF6F61')
  const [drawingColor,setDrawingColor] = useState('#FF6F61')
  const [isDrawing, setIsDrawing] = useState(false);
  const [isMouseDown,setIsMouseDown] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 900px')
  const isMediumScreen = useMediaQuery('(max-width: 1200px)')
  const isExtraLargeScreen = useMediaQuery('(min-width: 1250px)')

  //MAKE NEW GRID ON RENDER
  const generateGrid = () => {
  const newGrid = [];
  const cellWidth = numRows > 0 && numColumns > 0 ? 600 / numColumns : 0;
  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numColumns; j++) {
      //so as to access the right color use key-value pair
      const cellKey = `${i}-${j}`;
      cells.push(cellKey);
        //Table cell has built in event handlers for mouse clicks/drags over it
    }
    newGrid.push(cells);
  }
    setGrid(newGrid)
};

//generate the grid whenever page renders
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

    const handleFillRest = () => {
      const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid.length; j++){
          let cellColor = updatedGrid[i][j];
            if (cellColor !== '' || cellColor !== undefined)
              updatedGrid[i][j] = drawingColor;
          }
        }
        setGrid(updatedGrid);
    }

    const handleFillAll = () => {
       const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid.length; j++){
          updatedGrid[i][j] = drawingColor;
        }
       }
       setGrid(updatedGrid);
    };

    const handleResetColors = () => {
    // CANVAS MODE = RESET TO WHITE BACKGROUND
      if (isCanvasMode){
        const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid.length; j++){
          updatedGrid[i][j] = 'white';
        }
       }
       setGrid(updatedGrid);
      } else {
    // BARE GRID MODE = RESET TO EMPTY BACKGROUND
     const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid.length; j++){
          updatedGrid[i][j] = '';
        }
       }
       setGrid(updatedGrid);
       }
    };

// onMouseDown - painting a cell color at a time
const handleOnMouseDown = (rowIndex, columnIndex, color) => {
    if (isDrawing) {
      // Logic for handling drawing action
      // For example, update the color of the cell
      // at the specified row and column index
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = color;
      setGrid(updatedGrid);
    } else if (isCanvasMode) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = 'white';
      setGrid(updatedGrid);
    }
    else {
      // Logic for handling erasing action
      // For example, set the color of the cell
      // at the specified row and column index to 'white'
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = '';
      setGrid(updatedGrid);
    }
  setIsMouseDown(true);
};

const handleOnMouseOver = (rowIndex, columnIndex, color) => {
  if (isMouseDown) {
    if (isDrawing) {
      // Logic for handling drawing action
      // For example, update the color of the cell
      // at the specified row and column index
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = color;
      setGrid(updatedGrid);
    } else if (isCanvasMode) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = 'white';
      setGrid(updatedGrid);
    } else {
      // Logic for handling erasing action
      // For example, set the color of the cell
      // at the specified row and column index to 'white'
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = '';
      setGrid(updatedGrid);
    }
  }
};

  const handleOnMouseUp = () => {
    setIsMouseDown(false);
  }

  const handleDeleteGrid = () => {
    setCellColors({});
    setGrid([]);
  }

    return (
        <div id="home">
            <Grid container spacing={2}  sx={{border: "4px solid black", height:'100vh'}} >
              {/* HELPBAR */}
              <Grid item xs={0.03}>
                  <com.Helpbar />
              </Grid>
              <Grid item xs={2.7}>
              {/* COLOR PICKER UTIL */}
                <com.ColorPicker isColorPicked={isColorPicked} handlePickColor={handlePickColor} selectedColor={selectedColor} handleSetColor={handleSetColor} isSmallScreen={isSmallScreen} isExtraLargeScreen={isExtraLargeScreen} drawingColor={drawingColor} cellColors={cellColors} setCellColors={setCellColors} handleFillAll={handleFillAll} handleFillRest={handleFillRest} handleResetColors={handleResetColors}/>
              </Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={6}>
                  <com.Canvas grid={grid} isMouseDown={isMouseDown} isDrawing={isDrawing} selectedColor={selectedColor} drawingColor={drawingColor} handleOnMouseOver={handleOnMouseOver} handleOnMouseDown={handleOnMouseDown} handleOnMouseUp={handleOnMouseUp}/>
              </Grid>
              {/* GRID BUILDER UTIL*/}
              <Grid item xs={3} sx={{ minWidth: '300px'}}>
                  <com.Toolbar handleAddRow={handleAddRow} handleAddColumn={handleAddColumn} handleRemoveRow={handleRemoveRow} handleRemoveColumn={handleRemoveColumn} isDrawing={isDrawing} setIsDrawing={setIsDrawing} handleDeleteGrid={handleDeleteGrid} />
              </Grid>
            </Grid>
        </div>
    )
}