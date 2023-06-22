import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import fillRestImg from '../images/fill-rest-m.png'
import fillAllImg from '../images/fill-all.png'
import fillRestLight from '../images/fill-rest-light.png'
import fillAllLight from '../images/fill-all-light.png'
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset'

const ColorButtonGroup = ({handleResetColors, handleFillRest, handleFillAll}) => {

    const [isHalfHovered, setIsHalfHovered] = useState(false)
    const [isFullHovered, setIsFullHovered] = useState(false)
    
    return (
        <div>
     <Grid container columns={{ xs: 2}} sx={{marginLeft:'20px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4} sx={{marginLeft: '20px', marginBottom: '20px'}}>
                <Button variant="contained" color="error" sx={{marginLeft: '20px', width: '200px'}} onClick={handleResetColors}>
                    <FormatColorResetIcon />
                </Button>
            </Grid>
            <Grid container columns={{ xs: 2}} >
            {/* FILL REST */}
            <Grid item xs={1} md={2} lg={3} xl={4} sx={{marginLeft:'-25px'}}>
                <Button variant="outlined" 
                   color="primary" 
                   sx={{marginLeft:'50px', marginBottom:'10px', bgcolor: 'rgba(255, 255, 255, 0.8)'}} 
                   onMouseEnter={() => setIsHalfHovered(true)}
                   onMouseLeave={() => setIsHalfHovered(false)}
                   onClick={handleFillRest}>
                    {isHalfHovered ? ( 
                    <div>
                    <FontAwesomeIcon icon={faCircleHalfStroke} style={{fontSize: '25px', color:'#ffffff'}}/>
                    <ArrowForwardIcon /> 
                    <img src={fillRestLight} alt="Fill Rest" className='fill-rest'/>
                    </div> ) : (
                        <div>
                        <FontAwesomeIcon icon={faCircleHalfStroke} 
                        style={{fontSize: '25px', color:'black'}}/>
                        <ArrowForwardIcon /> 
                    <img src={fillRestImg} alt="Fill Rest" className='fill-rest'/></div>)}
                    </Button>
            </Grid>
            

            {/* FILL ALL */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
              <Button variant="outlined" 
                color="primary" 
                sx={{marginLeft:'10px', marginBottom:'10px', bgcolor: 'rgba(255, 255, 255, 0.8)'}} 
                onMouseEnter={() => setIsFullHovered(true)}
                onMouseLeave={() => setIsFullHovered(false)}
                onClick={handleFillAll}>
                {isFullHovered ? ( 
                    <div>
                    <FontAwesomeIcon icon={faCircleHalfStroke} 
                    style={{color:'#ffffff', fontSize: '25px'}} />
                    <ArrowForwardIcon /> 
                    <img src={fillAllLight} alt="Fill All" className='fill-all'/>
                    </div> ) : (
                        <div>
                        <FontAwesomeIcon icon={faCircleHalfStroke} 
                        style={{fontSize: '25px', color:'black'}}/>
                        <ArrowForwardIcon /> 
                    <img src={fillAllImg} alt="Fill All" className='fill-all'/></div>)}
                </Button>
            </Grid>
            </Grid> 
            </Grid>
            </div>
    )
}

export default ColorButtonGroup