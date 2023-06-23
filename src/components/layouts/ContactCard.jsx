import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import BusinessIcon from '@mui/icons-material/Business'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import '../../styles/contact_card.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const ContactCard = ({contact}) => {

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