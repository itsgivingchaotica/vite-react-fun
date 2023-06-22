import React from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Helpbar = () => {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (e) => {
    if (
      e.type === "keydown" &&
      (e.key === "Tab" || e.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const content = (
    <Box
      sx={{ width: 250, padding: "16px" }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
    <Typography variant="h3" component="div" sx={{fontFamily: 'Silkscreen'}}>
        HOW TO USE THE GRID BUILDER
    </Typography>
      <Typography variant="subtitle1" component="div" sx={{fontFamily: 'Gloria Hallelujah'}}>
        <p>You can create a beautiful design! Just click to add cells in rows and columns, choose a color, then fill
                in your
                grid with all the colors you please. Click and hold from a single cell to a different cell to color in a
                straight
                line!</p>
            <p>Editing is easy enough. Click to delete cells from rows and tables, as well as to reset the colors. You
                can even use
                the eraser to do so!</p>
      </Typography>
    </Box>
  );

  return (
    <div >
      <Button variant="contained" sx={{bgcolor:'black', marginTop:'100px', position:'fixed', bottom:'0'}} onClick={toggleDrawer("left", true)}>How To<MenuOpenIcon color="success" /></Button>
      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {content}
      </Drawer>
    </div>
  );
}

export default Helpbar