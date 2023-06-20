import React from 'react'

const Helpbar = () => {

    return (
        <div style={{border: '4px solid black'}}>
        <div style={{justifyContent: 'flex-end'}}>
            <i class="fa-regular fa-rectangle-xmark" ></i>
            </div>
            <p>You can create a beautiful design! Just click to add cells in rows and columns, choose a color, then fill
                in your
                grid with all the colors you please. Click and hold from a single cell to a different cell to color in a
                straight
                line!</p>
            <p>Editing is easy enough. Click to delete cells from rows and tables, as well as to reset the colors. You
                can even use
                the eraser to do so!</p>
        </div>
    )
}

export default Helpbar