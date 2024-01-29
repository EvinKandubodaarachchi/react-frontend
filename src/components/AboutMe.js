import styled from '@emotion/styled';
import { Avatar, Card, CardContent, Grid, Paper, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';

const AnimatedCard = styled(Card)`
  transition : transform 0.3s ease-in-out;
  &:hover{
    transform : scale(1.05);
    background-color: #d775d5;
  }
  cursor : pointer;
  background-color: #efb7ee;
`;

function AboutMe(){
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container spacing={3} justifyContent="center" alignItems="center" alignContent="center">
            <Grid item>
            <Paper elevation={3} style={{backgroundColor : 'rgb(171 53 152)', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    About Myself
                </Typography>
            </Paper>
                <Slide direction="right" in={true} timeout={5}>
                    <AnimatedCard onClick={handleCardClick} 
                    style={{transform: expanded ? 'scale(1.25)' : 'scale(1)' }}>
                        <CardContent>
                            <Avatar alt="My Avatar"
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                            sx={{width: 80, height: 80, marginBottom : 2}} />
                            <Typography variant="h6" gutterBottom>
                                Hello My Friends! I'm Evin Evmith. Welcome to my Web App!
                            </Typography>
                            <Typography>
                                I am an enthusiastic Programmer. I hereby welcome you to my React Web Application.<br></br> I'm 14 years old. I live in Kaduwela. I study at President's College - Kotte.<br></br> I favourite sport is Cricket. My ambition is to become a Software Engineer.  
                            </Typography>
                        </CardContent>
                    </AnimatedCard>
                </Slide>
            </Grid>

            <Grid item>

            <Paper elevation={3} style={{backgroundColor : '#3498DB', padding : '20px' , margin: '20px', textAlign : 'center'}} >
                <Typography variant="h4" style={{color : '#fff'}}>
                    A List of my Friends
                </Typography>
            </Paper>
            <Card style={{backgroundColor : "#aecce5"}}>
            <CardContent>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Akindu Uthmika </Typography>
                        <Typography> Expertise : HTML, C#, Processing, React </Typography>
                        <Typography> Hi my name is Akindu Uthmika. I am a Software Developer. <br></br>I'm 14 years old. I study at President's College - Kotte </Typography>

                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Kavinu Chenul </Typography>
                        <Typography > Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Kavinu Chenul. I am a Software Developer. <br></br>I'm 14 years old. I study at President's College - Kotte </Typography>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item>
                        <Avatar
                            alt="My Username"
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png"
                            sx={{ width: 60, height: 60 }}
                        />
                    </Grid>
                    <Grid item>
                        <Typography color="textSecondary" variant='h6'> Nethum Shakya </Typography>
                        <Typography > Expertise : HTML, C#, Processing, React </Typography>
                        <Typography > Hi my name is Nethum Shakya. I am a Software Developer. <br></br>I'm 14 years old. I study at President's College - Kotte </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </Grid>

        </Grid>
    );

}

export default AboutMe;