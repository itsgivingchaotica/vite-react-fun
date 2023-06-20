import React, { useState } from 'react'
import * as com from '../components'
import Grid from '@mui/material/Grid'
import '../App.css'

export default function Home() {
    
    const [isHidden,setIshidden] = useState(false)
    const [rowCount, setRowCount] = useState(0)
    const [columnCount, setColumnCount] = useState(0)

    return (
        <div id="home">
            <Grid container spacing={2}  sx={{border: "4px solid black"}}>
              {/* HELPBAR=ON */}
              <Grid item xs={1}>
                  <com.Helpbar />
              </Grid>
              {/* CANVAS FOR GRID */}
              <Grid item xs={8}>
                  <com.Canvas />
              </Grid>
              {/* TOOLBAR */}
              <Grid item xs={3} sx={{ minWidth: '300px'}}>
                  <com.Toolbar rowCount={rowCount} columnCount={columnCount} setRowCount={setRowCount} setColumnCount={setColumnCount}/>
              </Grid>
            </Grid>
        </div>
    )
}