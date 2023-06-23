import React, { useState, useEffect } from 'react'
import {util, lay} from '../../components'
import Grid from '@mui/material/Grid'
import { useMediaQuery } from '@mui/material'
import '../../App.css'

export default function Home() {

  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [grid, setGrid] = useState([]);
  const [isColorPicked, setIsColorPicked] = useState(true)
  const [isCanvasMode, setIsCanvasMode] = useState(false)
  const [cellColors,setCellColors] = useState({})
  const [selectedColor, setSelectedColor] = useState('#FF6F61')
  const [drawingColor,setDrawingColor] = useState('#FF6F61')
  const [isDrawing, setIsDrawing] = useState(true);
  const [isMouseDown,setIsMouseDown] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 900px')
  const isMediumScreen = useMediaQuery('(max-width: 1200px)')
  const isExtraLargeScreen = useMediaQuery('(min-width: 1250px)')
  const [isInitial, setIsInitial] = useState(true)
  const [wasDeleted, setWasDeleted] = useState(false)

  //MAKE NEW GRID ON RENDER
  const generateGrid = () => {
  
    const newGrid = [];
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

//generate the grid whenever numRows or numColumns renders
 useEffect(() => {
    generateGrid();
  }, [numRows, numColumns]);

  //adds a row and resets deletion status
  const handleAddRow = () => {
    setWasDeleted(false);
    if (numColumns === 0) {
      setNumColumns(1);
    }
    setNumRows(numRows + 1);
  };

  //adds a column and resets deletion status
  const handleAddColumn = () => {
    setWasDeleted(false);
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

  const handleModeChange = () => {
    setIsCanvasMode(!isCanvasMode);
    // handleChangeDefault();
    console.log("hello mode change " + isCanvasMode)
    //CANVAS MODE - set all empty cells to white
  }

  //lock in the color change
  const handlePickColor = () => {
            setIsColorPicked(true);
            setDrawingColor(selectedColor);
        }

  //set the color selection state
  const handleSetColor = (newColor) => {
        setSelectedColor(newColor.hex)
        setIsColorPicked(false)
    }

    //fill in the rest of the columns with color if they aren't already
    const handleFillRest = () => {
      const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid[i].length; j++){
          let cellColor = updatedGrid[i][j];
          //regex for the empty state and hex and canvas white
          const regex = /^\d+-\d+$/;
          const regex2 = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          const white = '#FFFFFF'
          if (isCanvasMode){
            if (regex.test(cellColor) || (!regex2.test(cellColor)) && cellColor !== white){
              updatedGrid[i][j] = drawingColor;
              }
          } else 
            if (regex.test(cellColor) || (!regex2.test(cellColor))){
              updatedGrid[i][j] = drawingColor;
              }
          }
        }
        setGrid(updatedGrid);
    }

    const handleFillAll = () => {
       const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid[i].length; j++){
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
        for (let j = 0; j < updatedGrid[i].length; j++){
          updatedGrid[i][j] = 'white';
        }
       }
       setGrid(updatedGrid);
      } else {
    // BARE GRID MODE = RESET TO EMPTY BACKGROUND
     const updatedGrid = [...grid];
       for (let i = 0; i < updatedGrid.length; i++){
        for (let j = 0; j < updatedGrid[i].length; j++){
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
    } else if (isCanvasMode && !isDrawing) {
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
    } else if (isCanvasMode && !isDrawing) {
      const updatedGrid = [...grid];
      updatedGrid[rowIndex][columnIndex] = 'white';
      setGrid(updatedGrid);
    } else {
      // Logic for handling erasing action
      // row and column index to 'clear' if in Grid mode
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
    setGrid([]);
    setNumRows(0);
    setNumColumns(0);
    setWasDeleted(true);
  }

    return (
        <div id="home">
            <Grid container spacing={2}  sx={{border: "4px solid black", height:'100vh'}} >
              {/* HELPBAR */}
              <Grid item xs={0.03}>
                  <lay.Helpbar />
              </Grid>
              <Grid item xs={2.7}>
              {/* COLOR PICKER UTIL */}
                <util.ColorPicker isColorPicked={isColorPicked} handlePickColor={handlePickColor} selectedColor={selectedColor} handleSetColor={handleSetColor} isSmallScreen={isSmallScreen} cellColors={cellColors} setCellColors={setCellColors} handleFillAll={handleFillAll} handleFillRest={handleFillRest} handleResetColors={handleResetColors}/>
              </Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={6}>
                  <lay.Canvas grid={grid} isMouseDown={isMouseDown} isDrawing={isDrawing} selectedColor={selectedColor} drawingColor={drawingColor} handleOnMouseOver={handleOnMouseOver} handleOnMouseDown={handleOnMouseDown} handleOnMouseUp={handleOnMouseUp} />
              </Grid>
              {/* GRID BUILDER UTIL*/}
              <Grid item xs={3} sx={{ minWidth: '300px' }}>
                  <util.Toolbar handleAddRow={handleAddRow} handleAddColumn={handleAddColumn} handleRemoveRow={handleRemoveRow} handleRemoveColumn={handleRemoveColumn} setIsDrawing={setIsDrawing} handleDeleteGrid={handleDeleteGrid} handleModeChange={handleModeChange} isCanvasMode={isCanvasMode} setIsInitial={setIsInitial} isInitial={isInitial} numRows={numRows} numColumns={numColumns} wasDeleted={wasDeleted} />
              </Grid>
            </Grid>
        </div>
    )
}