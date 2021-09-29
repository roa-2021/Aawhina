import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { updateUserThunk } from '../actions/users'
import { getUsersThunk } from '../actions/users'
import LaunchData from '../components/LaunchData'

import Nav from './Nav'
import { useHistory } from 'react-router-dom'
import { getSuburbs} from '../apis/suburb_api'
import { Link } from 'react-router-dom'

import { autocompleteClasses } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl'
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import ListSubHeader from '@mui/material/ListSubheader'

import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: 200,
    "& .MuiOutlinedInput-input": {
      color: "#91A6FF"
    },
    "& .MuiInputLabel-root": {
      color: "#91A6FF"
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#91A6FF"
    },
  }
});


function UpdateProfile (props)  {
  const { dispatch, currentUser } = props
  const classes = useStyles()
  
  useEffect(() => {
    getSuburbs()
    .then(res => setSuburbs(res)
    )
  },[])

 
  const [gender, setGender] = useState(currentUser.gender)
  
  const [theSuburbs, setSuburbs] = useState([])
  
  // const currentSuburb = theSuburbs.filter(s => s.id === currentUser.suburb_id).map(s => s.name)
  
  const [newSuburb, setSuburb] = useState()

  const [values, setValues] = useState({    
  first: currentUser.first_name,
  last: currentUser.last_name,
  bio: currentUser.bio,
  })

  const [image, setImage ] = useState("")
  const [ url, setUrl ] = useState(currentUser.image)
  // const [img, setImg] = useState ('')

  
  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "refb93xz")
    data.append("cloud_name","dvctkzwbh")
    
    fetch('https://api.cloudinary.com/v1_1/dvctkzwbh/image/upload',{
      method:"post",
      body: data})
      .then(resp => resp.json())
      .then(data => {
        setUrl(data.url)
        
      })
      .catch(err => console.log(err))
    }
    
    
    
    

    const Input = styled('input')({
      display: 'none',
    })
    
    
    
    
    console.log(props.currentUser)
    
    const handleSuburb = (e) => {
      e.preventDefault()
      setSuburb(e.target.value)
    }  
    
  const handleGender =(e) => {
    e.preventDefault()
    setGender(e.target.value)
    
  }  
  
  const handleChange =(e) => {
    e.preventDefault()
    setValues({
      [e.target.name]: e.target.value
    })  
    
  }  

  let history = useHistory()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedUser = {
      id: currentUser.id,
      first_name: values.first,
      last_name: values.last,
      email: currentUser.email,
      suburb_id: newSuburb,
      bio: values.bio,
      gender: gender, 
      spoken_languages: currentUser.spoken_languages,
      image: url
    }  
    
    console.log(updatedUser)
      dispatch(updateUserThunk(updatedUser)) 
      history.push('/profile') 
      
    }
    
    // dispatch(getUsersThunk()) 
    const callback = () => {
      uploadImage()
      handleSubmit()

    }

    
    
    const { first, last, bio } = values
    
    // <LaunchData />
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
                <Typography gutterBottom color='primary' variant="subtitle1" component="div" fontSize="h5.fontSize">
                  Update Profile
                </Typography>

              

              <Divider sx={{width: '23ch'}}/>
              <Stack sx={{ pr: 0 }}direction="row" justifyContent="">


                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '22ch' },
                  }}
                  noValidate
                  autoComplete="on"
                >
                    <TextField
                      label="First Name"
                      id="standard-size-small"
                      // defaultValue={currentUser.first_name}
                      size="small"
                      variant="standard"
                      color='primary' focused
                      name='first'
                      value={first}
                      onChange={handleChange}
                    />
                </Box>

               
              <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '22ch' },
                  }}
                  noValidate
                  autoComplete="on"
                >
                    <TextField
                      label="Last Name"
                      id="standard-size-small"
                      size="small"
                      color='primary' focused
                      variant="standard"
                      name='last'
                      value={last}
                      onChange={handleChange}
                    />
                </Box>
              </Stack>

              <Stack sx={{ pl: 0, pr: 0 }}direction="row" justifyContent="centre">
              <Box>
                <FormControl variant="standard" sx={{ m: 1, width: '18ch' }}>
                {/* <InputLabel>Gender</InputLabel> */}
                <TextField
                  value={gender}
                  label='Gender'
                  className={classes.root}
                  onChange={handleGender}
                  sx={{ width: '18ch' }}
                    select>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Gender Diverse'>Gender Diverse</MenuItem>
                  <MenuItem value='Prefer not to say'>Prefer not to say</MenuItem>
                </TextField>
                </FormControl>
              </Box>



              <Box>
              <FormControl variant="standard" sx={{ m: 1, width: '18ch' }}>
              <InputLabel>Suburb</InputLabel>
          <TextField
            defaultValue=''
            onChange={handleSuburb}
            value={newSuburb}
            className={classes.root}
            sx={{ width: '18ch' }}
            label='Suburb'
            select
            >
             

            <ListSubHeader>Wellington</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Wellington').map(s => ( 
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}
            <ListSubHeader>Lower Hutt</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Lower Hutt').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}


            <ListSubHeader>Upper Hutt</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Upper Hutt').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}

            <ListSubHeader>Porirua</ListSubHeader>
            {theSuburbs && theSuburbs.filter(s => s.region === 'Porirua').map(s => (
            <MenuItem value={s.id}>{s.name}</MenuItem>
            ))}

          </TextField>

          <input label = 'image uploader' type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
            <Button variant="outlined" onClick={callback}>Update Photo</Button> 
              </FormControl>
              </Box>
          </Stack>

              <TextField sx={{ mt: 4 }}  
                fullWidth id = 'outlined-required' 
                multiline rows={6}  
                label = 'About me' 
                name='bio' 
                color='primary' focused
                value={bio} 
                onChange={handleChange}/>
            </Grid>

            <Stack direction="row" item sx={{pt: 0,}}>
              <Box sx={{ "& button": { ml: 2, p: 0 } }}>
                <>
                <Button size="small">Cancel</Button>
               <Button size="small" onClick={handleSubmit}>Save Changes</Button>
                </>
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


  )}
  function mapState2Props (globalState) {
    return {
      currentUser: globalState.currentUser,
      suburb: globalState.suburb

    }  
  }
  

  export default connect(mapState2Props)(UpdateProfile) 
