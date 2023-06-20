import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ContactsIcon from '@mui/icons-material/Contacts'
import AddIcon from '@mui/icons-material/Add'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const InputForm = ({addToContacts}) => {

    // CONTACT CARD DATA
    const [firstName,setFirstName] = useState('');
    const [isFirstNameTouched, setIsFirstNameTouched] = useState(false);
    const [lastName,setLastName] = useState('');
    const [isLastNameTouched, setIsLastNameTouched] = useState(false);
    const [email,setEmail] = useState('');
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [mobile, setMobile] = useState('');
    const [isMobileTouched, setIsMobileTouched] = useState(false);
    const [work, setWork] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
    // This effect will run only once when the component mounts
    setIsFirstNameTouched(false);
    setIsLastNameTouched(false);
    setIsEmailTouched(false);
    setIsMobileTouched(false);
  }, []);


    // add the new contact info to the contact cards
    const handleAddContact = () => {
        if (!firstName || !lastName || !email || !mobile) {
      // Check if any of the required fields are empty
      return;
    }
        let newContact = { firstName: firstName, lastName: lastName, email: email, mobile: mobile, work: work}
        addToContacts(newContact);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setWork('');
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
        setIsTouched(true);
    }

    return (
        //  <div style={{position: 'fixed'}}>
        <Card sx={{ padding: '36px' }}>
        <Typography variant="h4" mb={3} sx={{ textAlign: "center"}}><ContactsIcon sx={{mr:1}}/>Contacts</Typography>
        <Stack spacing = {2} component="form" >
            {/* FIRST NAME */}
            <TextField 
                id="outlined-basic" 
                helperText="First Name" 
                variant="outlined"
                value={firstName}
                required
                onChange={(e) => (setFirstName(e.target.value), setIsTouched(true))}
                error={isFirstNameTouched && !firstName}
                InputProps={{ onBlur: () => setIsFirstNameTouched(true) }}
                />
            {/* LAST NAME */}
            <TextField 
                id="outlined-basic" 
                helperText="Last Name" 
                variant="outlined" 
                value={lastName} 
                required
                onChange={(e) => setLastName(e.target.value)}
                error={isLastNameTouched && !lastName}
                InputProps={{ onBlur: () => setIsLastNameTouched(true) }}
                />
            {/* EMAIL */}
            <TextField 
                id="outlined-basic" 
                helperText="Email" 
                variant="outlined" 
                value={email} 
                required
                onChange={(e) => setEmail(e.target.value)}
                error={isEmailTouched && !email}
                InputProps={{ onBlur: () => setIsEmailTouched(true) }}
                />
            {/* MOBILE */}
            <TextField 
                id="outlined-basic" 
                helperText="Mobile Phone" 
                variant="outlined" 
                value={mobile} 
                required
                onChange={(e) => setMobile(e.target.value)}
                error={isMobileTouched && !mobile}
                InputProps={{ onBlur: () => setIsMobileTouched(true) }}
                />
            {/* WORK */}
            <TextField 
                id="outlined-basic" 
                helperText="Work Phone" 
                variant="outlined" 
                value={work} 
                onChange={(e) => setWork(e.target.value)}/>
            <Button 
                variant="outlined" 
                type="submit"  
                endIcon={<AddIcon />} 
                onClick={handleAddContact}>
                Add 
            </Button>
                <Typography 
                    variant="h5" mb={3} 
                    sx={{ textAlign: "center", opacity: isSubmitted ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',}}>
                <DoneOutlineIcon sx={{mr:1, color: 'green'}}/> 
                    Submitted!
            </Typography>
        </Stack>
    </Card>
    )
}

export default InputForm