import React, { useState } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'

export default function Home() {
    
    const [isHidden,setIshidden] = useState(false)

    return (
        <div>
            <Grid container spacing={2}  sx={{border: "4px solid black"}}>
              {/* HELPBAR=ON */}
              <Grid item xs={3}>
                  <com.Helpbar />
              </Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={6}>
                  <com.Canvas />
              </Grid>
              {/* TOOLBAR */}
              <Grid item xs={3}>
                  <com.Toolbar />
              </Grid>
            </Grid>
        </div>
    )
}