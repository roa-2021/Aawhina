import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { postUserThunk } from '../actions/users'
import Nav from './Nav'
import { useHistory } from 'react-router-dom'
import { getSuburbs} from '../apis/suburb_api'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import ListSubHeader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import { styled } from '@mui/material/styles'

import { useAuth0 } from '@auth0/auth0-react'


function MakeProfile (props) {
  const { dispatch } = props
  const { user } = useAuth0()
  
  const [theSuburbs, setSuburbs] = useState([])
  const [gender, setGender] = useState('')
  
  
  const [values, setValues] = useState({
    first: '',
    last: '',
    email: '',
    bio: '',
  })  
  
  useEffect(() => {
    getSuburbs()
    .then(res => setSuburbs(res)
    )
  },[])
  
  const [newSuburb, setSuburb] = useState(0)

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
        ...values,
        [e.target.name]: e.target.value
      })  
  
    }  

  // const [image, setImage ] = useState("")
  // const [ url, setUrl ] = useState("")


  // const uploadImage = () => {
  //   const data = new FormData()
  //   data.append("file", image)
  //   data.append("upload_preset", "refb93xz")
  //   data.append("cloud_name","dvctkzwbh")

  //   fetch('https://api.cloudinary.com/v1_1/dvctkzwbh/image/upload',{
  //     method:"post",
  //     body: data})
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setUrl(data.url)
  //     })
  //     .catch(err => console.log(err))
    
  //   }

  //   const Input = styled('input')({
  //     display: 'none',
  //   })

  let history = useHistory()

  const handleSubmit = (e) => {
     e.preventDefault()
     const newUser = {
       first_name: values.first,
       last_name: values.last,
       email: user.email,
       suburb_id: newSuburb,
       bio: values.bio,
       gender: gender, 

     }  

     console.log(newUser)
     console.log(newSuburb)
      dispatch(postUserThunk(newUser)) 
      history.push('/') 
    
    
    
    //  uploadImage()
  }  

  const { first, last, bio} = values

  return (
    <>
    <Container component='main' maxWidth='xs'>
      <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography  component='h1' variant='h5'>Create Profile</Typography>
        <Box sx={{mt:3}} component='form'>
      
          <Grid container spacing={2} >

          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'First Name' name='first' value={first} onChange={handleChange}/>
          </Grid>
          <Grid item xs={6}>
            <TextField required fullWidth id = 'outlined-required' label = 'Last Name' name='last' value={last} onChange={handleChange}/>
          </Grid>
          <Grid item xs={12}>
            <TextField sx={{mt:3 }} required fullWidth id='outlined-required' defaultValue={user.email} label='Email' name='email' onChange={handleChange}/>
          </Grid>
       
          <Grid item xs={6}>

          <InputLabel>Suburb</InputLabel>
          <Select
            defaultValue=''
            onChange={handleSuburb}
            value={newSuburb}
            sx={{ width: '21ch' }}
            label='Suburb'>
             

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

          </Select>
          </Grid>
          <Grid item xs={6}>
          <InputLabel>Gender</InputLabel>
            <Select
              label='Gender'
              value={gender}
              onChange={handleGender}
              sx={{ width: '21ch' }}>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='gender diverse'>Gender Diverse</MenuItem>
              <MenuItem value='prefer not to say'>Prefer not to say</MenuItem>
            </Select>
        
          </Grid>
  
        <Grid item xs={12}>
          <TextField sx={{ mt: 4 }} required fullWidth id = 'outlined-required' multiline rows={6}  label = 'About you' name='bio' value={bio} onChange={handleChange}/>
        </Grid>
        <Grid>

        {/* <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
          <button onClick={uploadImage}>Upload</button> 
          <img src={url}/> */}

        </Grid>

          <div>
          <Button onClick={handleSubmit}>Create profile</Button>
          </div>
        </Grid>
        </Box>
        </Box>
        </Container>
      </>
  )
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users,
    suburb: globalState.suburb
  }
}

export default connect(mapState2Props)(MakeProfile)

// upload preset name refb93xz



// <Select
// label='Suburb'
// value={newSuburb}
// onChange={handleSuburb}
// sx={{ width: '21ch' }}>
//   {theSuburbs && theSuburbs.map(s => (
// <MenuItem value={s.id}>{s.name}</MenuItem>
//   ))}



