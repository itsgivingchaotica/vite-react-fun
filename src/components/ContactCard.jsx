import React from 'react';
import '../styles/contact_card.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../styles/contact_card.css'

const ContactCard = ({contact, index}) => {

    const { firstName, lastName, email, mobile, work } = contact;

    return(

        <Card sx={{ height: '100%'}}>

            {/* NAME: REQUIRED */}
            <CardContent>
            <Typography variant="h4" className="name"> {firstName} {lastName}</Typography>
                
            </CardContent>

            {/* EMAIL: REQUIRED */}
            <CardContent sx={{ display:'flex', alignItems: 'center'}}>
            <MailOutlineIcon sx={{mr:1}} />
                {email}
            </CardContent>

            {/* MOBILE PHONE: REQUIRED */}
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneAndroidIcon sx={{mr:1}}/>
                {mobile}
            </CardContent>

            {/* WORK PHONE: OPTIONAL */}
            {work && ( 
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <BusinessIcon sx={{ mr: 1 }} />
                    {work}
                </CardContent>
                )
            }
        </Card>
    )
}

export default ContactCard;