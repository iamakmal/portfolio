import React from 'react'
import {Typography} from '@mui/material'
import {Box} from '@mui/material'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import profilePic from '../assets/profile.jpg'
import DownloadIcon from '@mui/icons-material/CloudDownload';
import CV from '../assets/cv.pdf'

function About() {
  
  return (
    <section id="about">
    
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      //height: '100vh',
      justifyContent: 'center', 
      paddingLeft: '20px',
      paddingRight: '20px'
    }}
    >
    <Typography variant="h2" align="center" gutterBottom>About Me</Typography>
    <Grid 
      container
      spacing={2}
      >
      <Grid item xs={12} sm={6}>
      <img src={profilePic}    style={{
          borderRadius: '60%',
          width: '50%',
          marginLeft:'20px'
        }}/>
      </Grid>  
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" sx={{ fontSize: '24px' }}>
        Hello there, my name is Akmal Alavi. A dedicated, hardworking and an enthusiastic individual, looking forward to work in the IT industry. Seeking an internship on Software Development in a well reputed company to utilize my skills and to gain some real world experience in a challenging and motivating working environment. Currently I am a 3rd Year undergraduate at SLIIT, following BSc in Information Technology (Specializing in Software Engineering) degree program. Curiosity to learn new things is what keeps me motivated. I believe that I will be a valuable asset to the company that I will be working for.</Typography>
        <a href={CV} download><Button variant="contained" size="large" sx={{margin:'50px', padding: '20px', fontSize: '20px'}}>Download CV  &nbsp;<DownloadIcon/></Button></a>
      </Grid>
      </Grid>
    </Box>
    <br/>
    <br/>
    </section>
  )
}

export default About