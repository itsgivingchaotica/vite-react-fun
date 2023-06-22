import React from 'react'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent' 
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RemoveIcon from '@mui/icons-material/Remove'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'

const ColumnControl = ({handleIncrementColumn, handleDecrementColumn, columnCount}) => {

    return (
    <Grid item xs={1} md={2} lg={3} xl={4} style={{transform:'translateX(12px)'}}>
                <Card sx={{bgcolo: 'white', color:'black', maxHeight: '60px', maxWidth: '260px', marginLeft:'18px'}}>
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
                            badgeContent={columnCount}
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
            )
}

export default ColumnControl