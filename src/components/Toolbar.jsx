import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'
import { SketchPicker } from 'react-color'
import { useMediaQuery } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import TableRowsIcon from '@mui/icons-material/TableRows'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import BrushIcon from '@mui/icons-material/Brush'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import TurnLeftOutlinedIcon from '@mui/icons-material/TurnLeftOutlined'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import GridOnIcon from '@mui/icons-material/GridOn'
import fillRestImg from '../images/fill-rest-m.png'
import fillAllImg from '../images/fill-all.png'
import fillRestLight from '../images/fill-rest-light.png'
import fillAllLight from '../images/fill-all-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faEraser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Toolbar = ({rowCount, columnCount, setRowCount, setColumnCount}) => {
    //material ui media query for small screen
    const isSmallScreen = useMediaQuery('(max-width: 900px')
    const isMediumScreen = useMediaQuery('(max-width: 1200px)')
    const isExtraLargeScreen = useMediaQuery('min-width: 1250px')
    const [isHalfHovered, setIsHalfHovered] = useState(false)
    const [isFullHovered, setIsFullHovered] = useState(false)
    const [isColorPicked, setIsColorPicked] = useState(true)
    const [selectedColor, setSelectedColor] = useState('#FF6F61')

     const handleDecrementRow = () => {
    setRowCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleIncrementRow = () => {
    setRowCount((prevCount) => prevCount + 1);
  };

  const handleDecrementColumn = () => {
    setColumnCount((prevCount) => Math.max(1, prevCount - 1));
  };

  const handleIncrementColumn = () => {
    setColumnCount((prevCount) => prevCount + 1);
  };

    const handleSetColor = (newColor) => {
        setSelectedColor(newColor.hex)
        setIsColorPicked(false)
    }
    
    const handlePickColor = () => {
        setIsColorPicked(true);
        setDrawingColor(selectedColor);
    }


    return (
        <div
    style={{
        color: 'white'
    }}>
    <Card sx={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
          <Grid container spacing={{ xs: 1, md: 2}}  columns={{ xs: 1}} >
            <Grid item xs={12} >
                <Grid container>
                  <Grid item xs={4} md={8} sx={{backgroundColor:'black'}}>
                  <Card style={{backgroundColor: 'black', color:'white', justifyContent: 'center', paddingRight: '90px'}}>
                  <CardContent sx={{display: 'flex',
    marginLeft: '40px', alignItems:'center', width:'360px'}}>
                  {isSmallScreen ? ( <Typography variant="span" noWrap fontFamily="Silkscreen" sx={{ justifyContent:'center'}}>Grid Builder</Typography>) : (<Typography fontSize="26px" fontFamily="Silkscreen" sx={{marginBottom: '7px', marginTop: '2px'}}>Grid Builder</Typography> )}
                  </CardContent>
                  </Card>
                  </Grid>
                </Grid>
                </Grid>

              {/* ROWS  */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card sx={{backgroundColor: 'white', color:'black', maxHeight: '60px', maxWidth: '260px', marginLeft: "45px"}}>
                  <CardContent>
                    {/* DECREMENT ROW */}
                    <Stack direction="row" spacing={1}>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      >
                      <RemoveIcon onClick={handleDecrementRow}/>
                    </Button>
                        {/* INCREMENTAL ROW ICON  */}
                        <div style={{marginTop: '4px'}}>
                        <Badge 
                            color="secondary" 
                            badgeContent={rowCount}
                            >
                            <Typography variant="subtitle1">
                                ROW
                            </Typography>
                        <TableRowsIcon />
                        <ArrowDownwardIcon />
                        </Badge>
                        </div>
                    {/* INCREMENT ROW */}
                    <Button 
                      variant="outlined" 
                      color="success" 
                      sx={{marginLeft:'20px'}}>
                      <AddIcon onClick={handleIncrementRow}/>
                    </Button>
                    </Stack>
                  </CardContent>
                </Card>
            </Grid>
            
            {/* COLUMNS */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card sx={{backgroundColor: 'white', color:'black', maxHeight: '60px', maxWidth: '260px', marginLeft: "45px"}}>
                  <CardContent>
                    {/* DECREMENT COLUMN */}
                    <Stack direction="row" spacing={1}>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      >
                      <RemoveIcon onClick={handleDecrementColumn}/>
                    </Button>
                        {/* INCREMENTAL COLUMN ICON  */}
                        <div style={{marginTop: '4px'}}>
                        <Badge 
                            color="secondary" 
                            badgeContent={rowCount}
                            >
                            <Typography variant="subtitle1">
                                COL
                            </Typography>
                        <ViewWeekIcon />
                        <ArrowForwardIcon />
                        </Badge>
                        </div>
                    {/* INCREMENT COLUMN */}
                    <Button 
                      variant="outlined" 
                      color="success" 
                      sx={{marginLeft:'20px'}}>
                      <AddIcon onClick={handleIncrementColumn}/>
                    </Button>
                    </Stack>
                  </CardContent>
                </Card>
            </Grid>
            {/* COLOR PICKERS */}
              {/* <Grid item xs={12} >
              {isSmallScreen ? (<Grid container sx={{minWidth: '500px', justifyContent: 'flex-start'}}>
                  <Grid item xs={4} md={8} mr={3}>
                    <Typography variant="span">Fill it in</Typography>
                  </Grid>
                </Grid>) : (<Grid container sx={{minWidth: '500px', justifyContent: 'center'}}>
                  <Grid item xs={4} md={8}>
                  <Card>
                  <CardContent>
                    <Typography variant="h5" sx= {{marginRight:'30px'}}>Fill it in</Typography>
                    </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                )}
              </Grid> */}
              
            {isSmallScreen ? (
                <Grid item xs={12} >
                <Grid container > 
                <Button variant="contained" color="success" sx={{marginLeft:'50px'}}
                 onClick={handlePickColor}>Pick Color</Button>
                  <Grid item xs={4} md={8} sx={{marginTop: '10px'}}>
                    <Card sx={{marginLeft:'50px'}}>
                      <CardContent>
                        <SketchPicker color={selectedColor} style={{ justifyContent: 'center'}} width={150} onChangeComplete={(e)=>handleSetColor(e)}/>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>) : 
              
              
              isExtraLargeScreen ? (
                <Grid item xs={12} >
                <Grid container ml={8} sx={{marginLeft:'40px'}}>
                <Button variant="contained" color="success" sx={{marginLeft:'45px'}} onClick={handlePickColor}>Pick Color</Button>
                  <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                    <Card sx={{marginLeft:'50px'}}>
                  <CardContent sx={{marginLeft:'5px'}}>
                   <SketchPicker color={selectedColor} style={{ justifyContent: 'center'}} width={150}
                    onChangeComplete={(e)=>handleSetColor(e)}/>
                    </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>) : (
                
                <Grid item xs={12} >
                <Grid container sx={{marginLeft:'40px'}}>
                <Button variant="outlined" color="secondary" sx={{backgroundColor: 'white'}}>
                    <BrushIcon />
                </Button>
                <Button variant="contained" color="secondary" sx={{marginLeft:'5px'}} onClick={handlePickColor}>
                <Typography variant="subtitle1">Pick Color</Typography>
                </Button>

                {isColorPicked ? (
                    <DoneOutlineIcon sx={{margin: '5px', marginLeft:'20px', color:"green"}}/>) 
                    : (
                        <Badge>
                            <TurnLeftOutlinedIcon color="error" sx={{fontSize: "30px", margin: '5px', marginLeft:'10px'}}/>
                            <ErrorOutlinedIcon color="error" sx={{fontSize: "30px", margin: '5px', marginRight:'20px'}}/></Badge>)}

                    <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                        <Card sx={{marginLeft:'25px', width:'90%'}}>
                    <CardContent sx={{width:'260px'}}>
                    <SketchPicker color={selectedColor} style={{ justifyContent: 'center'}} width={150}
                        onChangeComplete={(e)=>handleSetColor(e)}/>
                        </CardContent>
                        </Card>
                    </Grid>
                    </Grid>
                </Grid>)}
            
            
            {/* FILL REST */}
            <Grid container columns={{ xs: 2}} sx={{marginLeft:'20px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4}>
                {/* <Card style={{backgroundColor: `rgba(255, 255, 255, 0.8)`, color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    alignItems:'center'}}> */}
                <Button variant="outlined" 
                   color="primary" 
                   sx={{marginLeft:'50px', marginBottom:'10px', backgroundColor: 'white'}} 
                   onMouseEnter={() => setIsHalfHovered(true)}
                   onMouseLeave={() => setIsHalfHovered(false)}>
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

                    
                
                    
                    {/* <img src="fill-rest-xs.jpg" style={{contentType: 'image/jpeg'}}/> */}
                    </Button>
                {/* </CardContent>
                </Card> */}
            </Grid>
            

            {/* FILL ALL */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
              <Button variant="outlined" 
                color="primary" 
                sx={{marginLeft:'10px', marginBottom:'10px', backgroundColor: 'white'}} 
                onMouseEnter={() => setIsFullHovered(true)}
                onMouseLeave={() => setIsFullHovered(false)}>
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

            {/* DRAW */}
            <Grid container columns={{ xs: 3}} spacing={-15} sx={{marginLeft:'70px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Button variant="contained" color="error">
                    <FormatColorResetIcon />
                </Button>
            </Grid>

            {/* ERASE */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
               <Button variant="outlined" color="primary" sx={{marginBottom:'10px', backgroundColor: 'white'}}>
                    <FontAwesomeIcon icon={faEraser} style={{fontSize: '20px', color: "#ff0000", paddingTop:'2px', paddingBottom: '2px', paddingRight:'6px',paddingLeft:'6px'}} />
                </Button>
            </Grid>

            {/* DELETE GRID */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Button variant="outlined" color="primary" sx={{marginBottom:'10px', backgroundColor: 'white'}}>
                   <DeleteForeverIcon color="error" />
                   <GridOnIcon />
                   </Button>
            </Grid>
            </Grid>
            
          </Grid>
          </Card>
        </div>
    )
}

export default Toolbar