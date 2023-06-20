import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { CirclePicker, BlockPicker } from 'react-color'
import { useMediaQuery } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import TableRowsIcon from '@mui/icons-material/TableRows';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import '../App.css'

const Toolbar = () => {
    //material ui media query for small screen
    const isSmallScreen = useMediaQuery('(max-width: 900px')
    const isMediumScreen = useMediaQuery('(max-width: 1100px)')
    const isExtraLargeScreen = useMediaQuery('min-width: 1250px')

    return (
        <div
    style={{
        border: '4px solid black', color: 'white'
    }}>
          <Grid container spacing={{ xs: 1, md: 2}}  columns={{ xs: 1}} sx={{mindWidth: "500px", marginRight:"20px"}}>
            <Grid item xs={12} >
                <Grid container sx={{ justifyContent:'center' }} >
                  <Grid item xs={4} md={8} >
                  {isSmallScreen ? ( <Typography variant="span" noWrap>Build Your Grid</Typography>) : (<Typography variant="h5" noWrap >Build Your Grid</Typography> )}
                  </Grid>
                </Grid>
                </Grid>

              {/* ROWS  */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                    <CardContent>
                    {/* <Button variant="decrement" color="error"><RemoveRoundedIcon color="red"/></Button> */}
                    <Button variant="outlined" color="error" sx={{marginRight:'10px'}}>
                        <RemoveIcon />
                    </Button>
                    <Button variant="contained" disabled>
                      <TableRowsIcon />
                    <ArrowDownwardIcon />
                    </Button>
                    <Button variant="outlined" color="success" sx={{marginLeft:'10px'}}>
                    <AddIcon  />
                </Button>
                    </CardContent>
                </Card>
                </Grid>
            {/* COLUMNS */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                 <Button variant="outlined" color="error" sx={{marginRight:'10px'}}>
                        <RemoveIcon />
                    </Button>
                    <Button variant="contained" disabled>
                    <ViewWeekIcon />
                    <ArrowForwardIcon /> 
                    </Button>
                    <Button variant="outlined" color="success" sx={{marginLeft:'10px'}}>
                    <AddIcon  />
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
                  <Grid item xs={4} md={8}>
                    {isMediumScreen ? <BlockPicker /> : <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>) : isExtraLargeScreen ? (<Grid item xs={12} >
                <Grid container ml={8}>
                  <Grid item xs={4} md={8}>
                    {isMediumScreen ? <BlockPicker />: <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>) : (<Grid item xs={12} >
                <Grid container sx={{justifyContent: 'flex-start', }} ml={2}>
                  <Grid item xs={4} md={8}>
                    {isMediumScreen ? <BlockPicker />: <CirclePicker />}
                  </Grid>
                </Grid>
              </Grid>)}
            
            
            {/* FILL REST */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                    Fill Rest
                </CardContent>
                </Card>
            </Grid>

            {/* FILL ALL */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                    Fill All
                </CardContent>
                </Card>
            </Grid>

            {/* DRAW */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                    Draw
                </CardContent>
                </Card>
            </Grid>

            {/* ERASE */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                    Erase
                </CardContent>
                </Card>
            </Grid>

            {/* CLEAR ALL COLORS */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                    Clear
                </CardContent>
                </Card>
            </Grid>

            {/* DELETE GRID */}
            <Grid item xs={1} md={2} lg={3} xl={4}>
                <Card style={{backgroundColor: 'white', color:'black', justifyContent: 'center'}}>
                <CardContent>
                   Delete
                </CardContent>
                </Card>
            </Grid>
            
          </Grid>
        </div>
    )
}

export default Toolbar