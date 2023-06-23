import React from 'react'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import RemoveIcon from '@mui/icons-material/Remove'
import TableRowsIcon from '@mui/icons-material/TableRows'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AddIcon from '@mui/icons-material/Add'

const RowControl = ({handleIncrementRow, handleDecrementRow, rowCount}) => {
    return (
        <Grid item xs={1} md={2} lg={3} xl={4} style={{transform:'translateX(12px)'}}>
            <Card sx={{bgcolor: 'white', color:'black', maxHeight: '60px', maxWidth: '260px', marginLeft:'18px'}}>
            <CardContent>
                {/* DECREMENT ROW */}
                <Stack direction="row" spacing={1}>
                <Button 
                variant="outlined" 
                color="error" >
                <RemoveIcon onClick={handleDecrementRow}/>
                </Button>
                {/* INCREMENTAL ROW ICON  */}
                <div style={{marginTop: '4px'}}>
                    <Badge 
                        color="secondary" 
                        badgeContent={rowCount}>
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
    )
}

export default RowControl