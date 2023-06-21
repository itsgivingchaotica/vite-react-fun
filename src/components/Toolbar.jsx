import React, { useState } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BrushIcon from '@mui/icons-material/Brush'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import GridOnIcon from '@mui/icons-material/GridOn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faEraser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Toolbar = React.forwardRef(({handleAddColumn, handleAddRow, handleRemoveColumn, handleRemoveRow, isSmallScreen, isDrawing, setIsDrawing},ref) => {
    //material ui media query for small screen
    const [rowCount, setRowCount] = useState(0)
    const [columnCount, setColumnCount] = useState(0)
    const [isDeleteHovered, setIsDeleteHovered] = useState(false)

     const handleDecrementRow = () => {
        if (rowCount > 0)
            setRowCount((prevCount) => prevCount - 1);
            handleRemoveRow();
      };

      const handleIncrementRow = () => {
        if (columnCount == 0){
        setRowCount((prevCount) => prevCount + 1);
        }
        setRowCount((prevCount) => prevCount + 1);
        handleAddRow();
      };

      const handleDecrementColumn = () => {
        if (columnCount > 0){
        setColumnCount((prevCount) => prevCount - 1);
        }
        handleRemoveColumn();
      };

      const handleIncrementColumn = () => {
        if (rowCount ==0){
            setRowCount((prevCount) => prevCount + 1);
        }
        setColumnCount((prevCount) => prevCount + 1);
        handleAddColumn();
      };    

      const handleDeleteGrid = () => {
        const gridContainer = ref.current.querySelector('.grid-container');
        gridContainer.innerHTML = "";
        setRowCount(0);
        setColumnCount(0);
      }

    return (
        <div style={{color: 'white'}}>
          <Card sx={{backgroundColor: "rgba(0, 0, 0, 0.5)", height: '100%'}}>
            <Grid container spacing={{ xs: 1, md: 2}}  columns={{ xs: 1}} sx={{justifyContent: 'spread-between'}}>
              <com.Title isSmallScreen={isSmallScreen} heading="Grid Builder" />

              {/* ROWS */}
              <com.RowControl handleIncrementRow={handleIncrementRow} handleDecrementRow={handleDecrementRow} rowCount={rowCount}/>
  
              {/* COLUMNS */}
              <com.ColumnControl handleIncrementColumn={handleIncrementColumn} handleDecrementColumn={handleDecrementColumn} columnCount={columnCount}/>
              
              <Grid container spacing={2} sx={{justifyContent:'center'}}>
              <Grid item xs={4}>
              <Button variant="contained" color="secondary" sx={{ padding:'28px', margin: '40px', transform:'translate(35px,-10px)'}} onClick={() => setIsDrawing(true)}>
                    <BrushIcon sx={{fontSize: "40px"}}/>
                </Button>
              </Grid>
              <Grid item xs={8} container direction="column" spacing={2}>
        {/* ERASE */}
        <Grid item>
           <Button variant="outlined" color="primary" sx={{backgroundColor: 'white', width:'90px', transform:'translate(60px,30px)'}} onClick={() => setIsDrawing(false)}>
                    <FontAwesomeIcon icon={faEraser} style={{fontSize: '20px', color: "#ff9792", paddingTop:'2px', paddingBottom: '2px', paddingRight:'6px',paddingLeft:'6px', height:"35px"}} />
                </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="error" sx={{backgroundColor: 'white', width:'90px', transform:'translate(60px,20px)', height:"40px"}} onMouseEnter={() => setIsDeleteHovered(true)}
                   onMouseLeave={() => setIsDeleteHovered(false)} onClick={handleDeleteGrid}>
                   <DeleteForeverIcon color="error" style={{fontSize:"38px"}}/>
                   {isDeleteHovered ? (<GridOnIcon style={{fontSize:"38px",color:'white'}} 
                   />) : (<GridOnIcon style={{fontSize:"38px",color:'black'}} 
                   />)}
                   </Button>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
          
            </Card>
        </div>
    )
})

export default Toolbar