import React, { useEffect, useState } from 'react'
import * as com from '../components'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { SketchPicker } from 'react-color'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import TurnLeftOutlinedIcon from '@mui/icons-material/TurnLeftOutlined'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'


const ColorPicker = ({isColorPicked, handlePickColor, selectedColor, handleSetColor, isSmallScreen, drawingColor, isExtraLargeScreen, handleFillAll, handleFillRest, handleResetColors}) => {


    return (
        <div style={{color: 'white', position:'fixed'}}>
          <Card sx={{bgcolor: "rgba(0, 0, 0, 0.5)", height: '100%', width: '300px', justifyContent:'flex-start'}}>
            <Grid container spacing={{ xs: 1, md: 2}}  columns={{ xs: 1}} >
            
            <com.Title isSmallScreen={isSmallScreen} heading="Color Picker"/>
            

                <Grid item xs={12} >
                <Grid container sx={{marginLeft:'20px'}} >
                
                <div style={{marginLeft: '40px'}}>

                {/* BUTTON THAT SETS THE COLOR FROM COLORPICKER */}
                <Button variant="contained" color="secondary" sx={{marginLeft:'25px'}} onClick={handlePickColor}>
                <Typography variant="subtitle1">Set Color</Typography>
                </Button>
                </div>
                {/* if a color was selected then confirmed via "pick color" button, show a green checkmark as feedback, else show a red arrow pointing to the button and error icon */}
                {isColorPicked ? (
                    <DoneOutlineIcon sx={{margin: '5px', marginLeft:'20px', color:"green"}}/>) 
                    : (
                        <Badge>
                            <TurnLeftOutlinedIcon color="error" sx={{fontSize: "30px", margin: '5px', marginLeft:'10px'}}/>
                            <ErrorOutlinedIcon color="error" sx={{fontSize: "30px", margin: '5px', marginRight:'20px'}}/></Badge>)}
                    {/* COLOR PICKER */}
                    <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                       <Card sx={{marginLeft:'25px', width:'90%'}}>
                          <CardContent sx={{width:'260px'}}>
                            <SketchPicker color={selectedColor} style={{ justifyContent: 'center'}} width={150}
                                onChangeComplete={(e)=>handleSetColor(e)}/>
                          </CardContent>
                       </Card>
                    </Grid>
                    </Grid>
                </Grid>
                {/* FILL REST, FILL ALL, AND CLEAR ALL COLORS */}
                <com.ColorButtonGroup handleResetColors={handleResetColors} handleFillRest={handleFillRest} handleFillAll={handleFillAll}/>
                </Grid>
                </Card>
        </div>
    );
}

export default ColorPicker