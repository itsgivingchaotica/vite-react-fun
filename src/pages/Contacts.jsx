import React, { useState, useEffect } from 'react'
import * as com from '../components/index.js'
import Grid from '@mui/material/Grid'

export default function Contact(){
    const [contacts,setContacts] = useState([
       {
            fullName: 'John Smith',
            email: 'johnsmith@me.com',
            mobile: '555-123-4567',
            work: '555-987-6543',

        },
        {
            fullName: 'Emily Johnson',
            email: 'emilyjohnson@gmail.com',
            mobile: '555-234-5678',
            work: '555-623-0593',
        },
        {
            fullName: 'Michael Davis',
            email: 'michaeldavis@hotmail.com',
            mobile: '555-345-6789',
            work: '555-765-4321'
        },
        {
            fullName: 'Sophia Wilson',
            email: 'sophiawilson@icloud.com',
            mobile: '555-456-7890',
        }  
    
    ]);

     return (
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="flex-start">
      <Grid item xs={12} md={4}>
        <com.InputForm />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2} >
          {contacts.map((contact, index) => (
            <Grid item xs={6} key={index}>
              <com.ContactCard contact={contact} index={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}