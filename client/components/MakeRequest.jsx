import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { postRequestThunk } from '../actions/requests'
import { connect } from 'react-redux'

import Welcome from './Welcome'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from '@mui/lab/TimePicker';
import { makeStyles } from "@material-ui/core/styles";

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


function MakeRequest ({ dispatch, currentUser }) {
  const { isAuthenticated } = useAuth0()
  const classes = useStyles()
  
  let history = useHistory()

  const [category, setCategory] = useState('')
  const [timeframe, setTimeframe] = useState('')

  const [values, setValues] = useState({
    title: '',
    details: '',
  })

  const handleCategory = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  const handleTimeframe = (e) => {
    e.preventDefault()
    setTimeframe(e.target.value)
  }
  
  const handleChange =(e) => {
    e.preventDefault()
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })  
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRequest = {
      title: values.title,
      category: category,
      time_frame: timeframe,
      details: values.details,
      user_id: currentUser.id
    }  
    dispatch(postRequestThunk(newRequest)) 
    history.push('/requests') 
  }

  const handleCancel = (e) => {
    e.preventDefault()
    history.push('/requests')
  }

  const { title, details } = values

  if (isAuthenticated) {
    return (
      <>
        <Container component='main' maxWidth='xs'>
          <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography  component='h1' variant='h5'>Create a Request</Typography>
            <Box sx={{mt:3}} component='form'>
              <Grid container spacing={2} >
                <Grid item sm={12}>
                  <TextField sx={{mt:3 }} required fullWidth id='outlined-required' label='Title' name='title' value={title} onChange={handleChange}/>
                </Grid>
                <Grid item sm={12}>
                  <InputLabel>Category</InputLabel>
                  <TextField
                    value={category}
                    className={classes.root}
                    label='Category'
                    onChange={handleCategory}
                    sx={{ width: '46ch' }}
                    select
                  >
                    <MenuItem value='Groceries'>Groceries</MenuItem>
                    <MenuItem value='Transport'>Transport</MenuItem>
                    <MenuItem value='Childcare'>Childcare</MenuItem>
                    <MenuItem value='Meal Preperation'>Meal Preperation</MenuItem>
                    <MenuItem value='Indoor Tasks'>Indoor Tasks</MenuItem>
                    <MenuItem value='Outdoor Tasks'>Outdoor Tasks</MenuItem>
                    <MenuItem value='Buddying'>Buddying</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item sm={12}>
                  <InputLabel>Date to be completed by</InputLabel>
                  <TextField
                    value={timeframe}
                    label='timeframe'
                    className={classes.root}
                    onChange={handleTimeframe}
                    sx={{ width: '46ch' }}
                    select
                  >
                    <MenuItem value='Today'>Today</MenuItem>
                    <MenuItem value='Tomorrow'>Tomorrow</MenuItem>
                    <MenuItem value='This week'>This week</MenuItem>
                    <MenuItem value='Next week'>Next week</MenuItem>
                    <MenuItem value='Ongoing'>Ongoing</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item sm={12}>
                  <TextField sx={{ mt: 4 }} fullWidth id = 'outlined-required' multiline rows={6}  label = 'Further Details' name='details' value={details} onChange={handleChange}/>
                </Grid>
                <Grid>
                  <Button onClick={handleSubmit}>Create</Button>
                  <Button onClick={handleCancel}>Cancel</Button> 
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </>
    )
  } return (< Welcome />)
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(MakeRequest)
