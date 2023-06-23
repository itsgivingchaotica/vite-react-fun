import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import Switch from '@mui/material/Switch'

//https://codesandbox.io/s/nkmw6c?file=/demo.tsx:32-173
const OrangeSwitchDemo = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: orange[600],
    '&:hover': {
      backgroundColor: alpha(orange[700], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: orange[700],
  },
}));
const OrangeSwitch = ({ onChange }) => {
    return (
        <OrangeSwitchDemo onChange={onChange}/>
    )
}

export default OrangeSwitch