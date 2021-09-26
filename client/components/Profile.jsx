import * as React from 'react';
import { connect } from 'react-redux'
import Nav from './Nav'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { grey } from '@mui/material/colors';
import { autocompleteClasses } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

function Login ()  {

  const [editing, setEditing] = React.useState(false)
  
  const toggleEditing = () => {
    setEditing(!editing)
    
  }

  return (

    <>
      <Nav/>


    <Container sx={{ p: 2, margin: 'auto', mt: 10, width: '67.3vh', height: '70vh', flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box>
          <Grid item sx={{ mt: 7}}>
          <Avatar
              alt="Profile picture"
              src="/images/avatar.jpeg"
              border= "1px solid"
              sx={{ width: 110, height: 110 }}
              />
          </Grid>
          <Button sx={{ml: 1}}size="small">Edit Photo</Button>
        </Box>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" fontSize="large">
                Hi, I'm Phill
              </Typography>
              <Divider light />
              <Typography sx={{mt: 2}}variant="body2" gutterBottom fontSize="medium">
                About me:
              </Typography>


              {editing?
              <p>Editing about me section</p>
              :
              <Typography variant="body2" color="text.secondary">
                Information about myself that I have entered into my bio section
              </Typography>}
              


            </Grid>
            <Grid item sx={{pt: 0}}>
            <Box sx={{ "& button": { m: -2, p: 0 } }}>
             <Button size="small" onClick={toggleEditing}>Edit</Button>
            </Box>
  
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>

  )}
  

  export default connect()(Login) 