import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Welcome from './Welcome'
import { getSuburbs} from '../apis/suburb_api'
import { useAuth0 } from '@auth0/auth0-react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'



function Profile (props)  {
  const { dispatch, currentUser } = props
  const { user, isAuthenticated } = useAuth0()

  // useEffect(() => {
  //   if (user) {
  //     dispatch(setCurrentUserThunk(user.email))
  //   }
  // }, [user])

  useEffect(() => {
    getSuburbs()
    .then(res => setSuburbs(res)
    )
  },[])
  
  const [theSuburbs, setSuburbs] = useState([])
  
  const currentSuburb = theSuburbs.filter(s => s.id === currentUser.suburb_id).map(s => s.name)

  let history = useHistory()

  const handleCock = (e) => {
    e.preventDefault() 
      history.push('/profile/edit')
  }
  if (isAuthenticated) {
  return (

    <>
  
    <Container sx={{ p: 2, margin: 'auto', mt: 10, width: '67.3vh', height: '70vh', flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box>
          <Grid item sx={{ mt: 7}}>
          <Avatar
              alt="Profile picture"
              src={currentUser.image}
              border= "1px solid"
              sx={{ width: 110, height: 110 }}
              />
          </Grid>
        </Box>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" color='secondary' component="div" fontSize="h5.fontSize">
                Profile
              </Typography>
              <Divider sx={{width: '23ch'}}/>
              {/* <Typography sx={{mt: 2}}variant="body2" gutterBottom fontSize="h6.fontSize">
                About me:
              </Typography> */}

              <Stack sx={{ pr: 0 }}direction="row" justifyContent="">
                <Typography sx={{pr: 2, mt: 2}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  Name: 
                </Typography>

                <Typography sx={{mt: 2, pl:.5}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  {currentUser.first_name}
                </Typography>

               <Typography sx={{mt: 2, pl: 1}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  {currentUser.last_name}
                </Typography>
              </Stack>

              <Stack sx={{ pr: 0 }}direction="row" justifyContent="">
                <Typography sx={{pr: 1, mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  Gender: 
                </Typography>

                <Typography sx={{mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  {currentUser.gender}
                </Typography>
              </Stack>
              
              <Stack sx={{ pr: 0 }}direction="row" justifyContent="">
                <Typography sx={{pr: 1, mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
                  Suburb: 
                </Typography>

               <Typography sx={{mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
              {currentSuburb[0]}
            </Typography>
          </Stack>

              <Stack sx={{ pr: 0 }} direction="row" justifyContent="">
              <Typography sx={{pr: 0, mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
                About Me:
              </Typography>
              <Typography sx={{pl: .4, mt: 0}} color='secondary' variant="body2" gutterBottom fontSize="large">
                {currentUser.bio}
              </Typography>
              </Stack>
            </Grid>

            <Stack direction="row" item sx={{pt: 0}}>
              <Box sx={{ "& button": { ml: 2, p: 0 } }}>
              <Button color='primary' onClick={handleCock}size="small">Edit Details</Button>
              </Box>
            </Stack>

          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>
)
} return (<Welcome />)
}

  function mapState2Props (globalState) {
    return {
      currentUser: globalState.currentUser,
      suburb: globalState.suburb

    }  
  }
  

  export default connect(mapState2Props)(Profile) 
