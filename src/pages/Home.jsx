import React, { useState, useEffect } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import '../App.css'

export default function Home() {

  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [grid, setGrid] = useState([]);

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

  const generateGrid = () => {
  const rows = [];
  const cellWidth = numRows > 0 && numColumns > 0 ? 600 / numColumns : 0;
  for (let i = 0; i < numRows; i++) {
    const cells = [];
    for (let j = 0; j < numColumns; j++) {
      cells.push(
        <TableCell key={j} sx={{ border: '3px solid black', boxSizing:'border-box', backgroundColor: 'white', flexShrink:1, width: '.01%', whiteSpace:'nowrap'}}>
        </TableCell>
      );
    }
    rows.push(<TableRow sx={{flexShrink:1, minWidth: 'auto'}}key={i}>{cells}</TableRow>);
  }
  setGrid(rows);
};


    return (
        <div id="home">
            <Grid container spacing={2}  sx={{border: "4px solid black"}}>
              {/* HELPBAR=ON */}
              <Grid item xs={0.03}>
                  <com.Helpbar />
              </Grid>
              <Grid item xs={2.37}></Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={6.2}>
                  <com.Canvas grid={grid}/>
              </Grid>
              {/* TOOLBAR */}
              <Grid item xs={3.2} sx={{ minWidth: '300px'}}>
                  <com.Toolbar handleAddRow={handleAddRow} handleAddColumn={handleAddColumn} handleRemoveRow={handleRemoveRow} handleRemoveColumn={handleRemoveColumn}/>
              </Grid>
            </Grid>
        </div>
    )
}