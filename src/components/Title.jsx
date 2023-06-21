import React from 'react'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Title = ({isSmallScreen, heading}) => {

    return (
      <Grid item xs={12} >
        <Grid container >
          <Grid item xs={4} md={8} sx={{backgroundColor:'black'}}>
            <Card style={{backgroundColor: 'black', color:'white', width:'400px'}}>
            <CardContent sx={{display: 'flex', width:'270px', justifyContent:'center'}}>
            
            {isSmallScreen ? ( 
                <Typography variant="span" noWrap fontFamily="Silkscreen" sx={{ justifyContent:'center'}}>
                    Grid Builder
                </Typography>) : 
                
                (<Typography fontSize="26px" fontFamily="Silkscreen" >
                {heading}
                </Typography> )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Title