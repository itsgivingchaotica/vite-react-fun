import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ContactsIcon from '@mui/icons-material/Contacts'
import AddIcon from '@mui/icons-material/Add'

const InputForm = ({addToContacts}) => {

    // CONTACT CARD DATA
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [work, setWork] = useState('');


    // add the new contact info to the contact cards
    const handleAddContact = () => {
        let newContact = { firstName: firstName, lastName: lastName, email: email, mobile: mobile, work: work}
        addToContacts(newContact);
    }

    return (
        // <div style={{position: 'fixed'}}>
        <Card sx={{ padding: '36px' }}>
        <Typography variant="h4" mb={3} sx={{ textAlign: "center"}}><ContactsIcon sx={{mr:1}}/>Contacts</Typography>
        <Stack spacing = {2} component="form" >
            {/* FIRST NAME */}
            <TextField 
                id="outlined-basic" 
                helperText="First Name" 
                variant="outlined" 
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
            {/* LAST NAME */}
            <TextField 
                id="outlined-basic" 
                helperText="Last Name" 
                variant="outlined" 
                defaultValue={firstName} 
                onChange={(e) => setLastName(e.target.value)}/>
            {/* EMAIL */}
            <TextField 
                id="outlined-basic" 
                helperText="Email" 
                variant="outlined" 
                defaultValue={firstName} 
                onChange={(e) => setEmail(e.target.value)}/>
            {/* MOBILE */}
            <TextField 
                id="outlined-basic" 
                helperText="Mobile Phone" 
                variant="outlined" 
                defaultValue={firstName} 
                onChange={(e) => setMobile(e.target.value)}/>
            {/* WORK */}
            <TextField 
                id="outlined-basic" 
                helperText="Work Phone" 
                variant="outlined" 
                defaultValue={firstName} 
                onChange={(e) => setWork(e.target.value)}/>
            <Button 
                variant="outlined" 
                type="submit"  
                endIcon={<AddIcon />} 
                onClick={handleAddContact}>
                Add 
            </Button>
        </Stack>
    </Card>
    )
}

export default InputForm