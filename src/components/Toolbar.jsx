import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge';
import { CirclePicker, BlockPicker } from 'react-color'
import { useMediaQuery } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import TableRowsIcon from '@mui/icons-material/TableRows'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import BrushIcon from '@mui/icons-material/Brush';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import GridOnIcon from '@mui/icons-material/GridOn';
import fillRestImg from '../images/fill-rest-m.png'
import fillAllImg from '../images/fill-all.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faEraser } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Toolbar = ({rowCount, columnCount, setRowCount, setColumnCount}) => {
    //material ui media query for small screen
    const isSmallScreen = useMediaQuery('(max-width: 900px')
    const isMediumScreen = useMediaQuery('(max-width: 1200px)')
    const isExtraLargeScreen = useMediaQuery('min-width: 1250px')

    const handleIncrementRow = () => {
        let tempRows = rowCount;
        setRowCount(++tempRows);
    }

    const handleDecrementRow = () => {
        let tempRows = rowCount;
        if (rowCount > 0)
            setRowCount(--tempRows);
    }

    const handleIncrementColumn = () => {
        let tempCols = columnCount;
        setColumnCount(++tempCols);
    }

    const handleDecrementColumn = () => {
        let tempCols = columnCount;
        if (columnCount > 0)
            setColumnCount(--tempCols);
    }


    return (
        <div
    style={{
        color: 'white'
    }}>
          <Grid container spacing={{ xs: 1, md: 2}}  columns={{ xs: 1}} sx={{mindWidth: "500px", marginRight:"10px"}}>
            <Grid item xs={12} >
                <Grid container sx={{ }} >
                  <Grid item xs={4} md={8} sx={{backgroundColor:'black'}}>
                  <Card style={{backgroundColor: 'black', color:'white', justifyContent: 'center', paddingRight: '50px'}}>
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
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxHeight: '60px'}}>
                  <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                    {/* DECREMENT ROW */}
                    <Button 
                      variant="outlined" 
                      color="error" 
                      sx={{marginRight:'10px'}}>
                      <RemoveIcon onClick={handleDecrementRow}/>
                    </Button>
                        {/* INCREMENTAL ROW ICON  */}
                        <Badge 
                            color="secondary" 
                            badgeContent={rowCount}>
                        <TableRowsIcon />
                        <ArrowDownwardIcon />
                        </Badge>
                    {/* INCREMENT ROW */}
                    <Button 
                      variant="outlined" 
                      color="success" 
                      sx={{marginLeft:'10px'}}>
                      <AddIcon onClick={handleIncrementRow}/>
                    </Button>
                  </CardContent>
                </Card>
            </Grid>
            {/* COLUMNS */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
              <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxHeight: '60px' }}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                {/* DECREMENT COLUMN */}
                 <Button variant="outlined" color="error" sx={{marginRight:'10px'}}>
                    <RemoveIcon onClick={handleDecrementColumn}/>
                  </Button>
                  {/* INCREMENTAL COLUMN ICON */}
                  <Badge 
                            color="secondary" 
                            badgeContent={columnCount}>
                    <ViewWeekIcon />
                    <ArrowForwardIcon /> 
                  </Badge>
                  {/* INCREMENT COLUMN */}
                  <Button variant="outlined" color="success" sx={{marginLeft:'10px'}}>
                    <AddIcon  onClick={handleIncrementColumn}/>
                  </Button>
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
            {isSmallScreen ? (<Grid item xs={12} >
                <Grid container > 
                <Button variant="contained" sx={{marginLeft:'40px'}}>Pick Color</Button>
                  <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                    {isMediumScreen ? <BlockPicker /> : <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>) : isExtraLargeScreen ? (<Grid item xs={12} >
                <Grid container ml={8} sx={{marginLeft:'40px'}}>
                <Button variant="contained" sx={{marginLeft:'45px'}}>Pick Color</Button>
                  <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                    {isMediumScreen ? <BlockPicker />: <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>) : (<Grid item xs={12} >
                <Grid container sx={{marginLeft:'40px'}}>
                <Button variant="contained" sx={{marginLeft:'65px'}}>Pick Color</Button>
                  <Grid item xs={4} md={8} style={{marginTop: '10px'}}>
                    {isMediumScreen ? <BlockPicker />: <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>)}
            
            
            {/* FILL REST */}
            <Grid container columns={{ xs: 2}} sx={{marginLeft:'20px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
    <Button variant="outlined" color="primary" sx={{marginLeft:'10px'}}>
                    <FontAwesomeIcon icon={faCircleHalfStroke} style={{fontSize: '25px', color:'black'}}/>
                    <ArrowForwardIcon /> 
                    <img src={fillRestImg} alt="Fill Rest" className='fill-rest'/>
                    {/* <img src="fill-rest-xs.jpg" style={{contentType: 'image/jpeg'}}/> */}
                    </Button>
                </CardContent>
                </Card>
            </Grid>
            

            {/* FILL ALL */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', height:'60px'}} >
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
    <Button variant="outlined" color="primary" sx={{marginLeft:'10px'}}>
                <FontAwesomeIcon icon={faCircleHalfStroke} style={{fontSize: '25px', color:'black'}}/>
                <ArrowForwardIcon /> 
                <img src={fillAllImg} alt="Fill All" className='fill-all'/>
                </Button>
                </CardContent>
                </Card>
            </Grid>
            </Grid>

            {/* DRAW */}
            <Grid container columns={{ xs: 2}} sx={{marginLeft:'20px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                <Button variant="outlined" color="success" sx={{marginLeft:'10px'}}>
                    <BrushIcon />
                </Button>
                </CardContent>
                </Card>
            </Grid>

            {/* ERASE */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                <Button variant="outlined" color="error" sx={{marginLeft:'10px'}}>
                    <FontAwesomeIcon icon={faEraser} style={{fontSize: '20px', color: "#ff0000", paddingTop:'2px', paddingBottom: '2px', paddingRight:'6px',paddingLeft:'6px'}} />
                </Button>
                </CardContent>
                </Card>
            </Grid>
            </Grid>

            {/* CLEAR ALL COLORS */}
            <Grid container columns={{ xs: 2}} sx={{marginLeft:'20px', marginTop: '10px'}}>
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                <Button variant="outlined" color="primary" sx={{marginLeft:'10px'}}>
                   <FormatColorResetIcon color="error"/>
                   </Button>
                </CardContent>
                </Card>
            </Grid>

            {/* DELETE GRID */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'var(--antique-white)', color:'black', justifyContent: 'center', maxWidth:'150px', maxHeight: '60px'}}>
                <CardContent sx={{display: 'flex',
    justifyContent: 'center', alignItems:'center'}}>
                <Button variant="outlined" color="primary" sx={{marginLeft:'10px'}}>
                   <DeleteForeverIcon color="error" />
                   <GridOnIcon />
                   </Button>
                </CardContent>
                </Card>
            </Grid>
            </Grid>
          </Grid>
        </div>
    )
}

export default Toolbar