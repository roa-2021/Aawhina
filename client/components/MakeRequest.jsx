import React, { useState, useEffect } from 'react'

// import connect from 'react-redux'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


function MakeRequest (props) {

  const [values, setValues] = useState({
    title: '',
    timeframe: '',
    details: '',
  })
  const [category, setCategory] = useState('')
  const [suburb, setSuburb] = useState('')

  const handleCategory = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }
  
  const handleSuburb = (e) => {
    e.preventDefault()
    setSuburb(e.target.value)
  }


  const handleSubmit = () => {
      console.log('hello')
  }


  return (
    <>
    <Container component='main' maxWidth='xs'>
      <Box sx={{ marginTop:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography  component='h1' variant='h5'>Create a Request</Typography>
        <Box sx={{mt:3}} component='form'>
          <Grid container spacing={2} >

          <Grid item sm={12}>
            <TextField sx={{mt:3 }} required fullWidth id='outlined-required'label='Title' />
          </Grid>

          <Grid item sm={6}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label='Category'
            onChange={handleCategory}
            sx={{ width: '46ch' }}>
          <MenuItem >To map over category</MenuItem>
          </Select>
          </Grid>
          <Grid item sm={12}>
            <TextField sx={{mt:3 }} required fullWidth id='outlined-required'label='Timeframe' />
          </Grid>

          <Grid item sm={6}>
          <InputLabel>Suburb</InputLabel>
          <Select
            value={suburb}
            label='Suburb'
            onChange={handleSuburb}
            sx={{ width: '46ch' }}>
          <MenuItem >To map over suburb</MenuItem>
          </Select>
          </Grid>


          
      
        <Grid item sm={12}>
          <TextField sx={{ mt: 4 }} fullWidth id = 'outlined-required' multiline rows={6}  label = 'Further Details'/>
        </Grid>
        <Grid>

        </Grid>


          <Button onClick={handleSubmit}>Create</Button>
          <Button>Cancel</Button>
          
        </Grid>
        </Box>
        </Box>
        </Container>
      </>
  )
}

export default MakeRequest
// export default connect(mapReduxToProps)(Register)
