import React, { useState, useRef, useEffect } from 'react'
import { postOfferThunk } from '../actions/offers'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'


function RequestCard ({ dispatch, request, currentUser }) {
  const [open, setOpen] = useState(false);
  const [openSubmit, setOpenSubmit] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [scrollSubmit, setScrollSubmit] = useState('paper');
  const [notes, setNotes] = useState('')
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setOpenSubmit(false)
    setScroll(scrollType);
  };

  const handleClickSubmitOpen = (scrollType) => () => {
    setOpenSubmit(true);
    setOpen(false);
    setScrollSubmit(scrollType);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitClose = () => {
    const newOffer = {
      request_id: request.id,
      user_id: currentUser.id,
      notes
    }
    dispatch(postOfferThunk(newOffer))
    setOpenSubmit(false);
  };

  const handleNotesChange = (e) => {
    e.preventDefault()
    setNotes(e.target.value)
  }
  
  const descriptionElementRef = useRef(null)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // const lightTheme = createTheme({ palette: { mode: 'light' } })

  return (
    <Grid item>
      <Card 
        variant="outlined" 
        onClick={handleClickOpen('paper')}
      >
        <CardContent>
          <Typography variant="h6">
            {`${request.title}`}
          </Typography>
          <Typography my={0.5}>
            {`User ${request.user_id} would like help with ${request.details}`}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
            label={request.category} 
            variant="outlined" 
            />
            <Chip 
              label={request.suburb_name} 
              variant="outlined" 
              />
            </Stack>
          </CardContent>
        </Card>

        {/* ------------------------------------------ */}

        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          maxWidth="sm"
          fullWidth={true}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          >
          <DialogTitle id="scroll-dialog-title">{`${request.title}`}</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            {/* <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >  */}
              <Typography component="h6" variant="body1" >
                Description
              </Typography>
              <Typography variant="body2" gutterBottom >
                {`${request.details}`}
              </Typography>
              <Typography component="h6" variant="body1">
                Timeframe
              </Typography>
              <Typography variant="body2" gutterBottom >
                {`${request.time_frame}`}
              </Typography>
              <Stack direction="row" spacing={1} mt={1.25}>
                <Chip
                label={request.category} 
                variant="outlined" 
                />
                <Chip 
                  label={request.suburb_name} 
                  variant="outlined" 
                />
              </Stack>
            //display all offers on request//
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Back</Button>
            <Button onClick={handleClickSubmitOpen('paper')}>Offer to help</Button>
          </DialogActions>
        </Dialog>

        {/* ----------------Submit-Form------------------- */}

        <Dialog
          open={openSubmit}
          onClose={handleSubmitClose}
          scroll={scrollSubmit}
          maxWidth="sm"
          fullWidth={true}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">{`Enter your details`}</DialogTitle>
          <DialogContent dividers={scrollSubmit === 'paper'}>
            {/* <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >  */}
              <TextField 
                sx={{ 
                  mt: 1, 
                  width: '61ch' 
                  }} 
                multiline 
                rows={4} 
                id="outlined-basic" 
                label="Information to be sent to requester" 
                variant="outlined"
                name="notes"
                value={notes}
                onChange={handleNotesChange}
              />
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickOpen('paper')}>Back</Button>
            <Button onClick={handleSubmitClose}>Submit Offer</Button>
          </DialogActions>
        </Dialog>
      
      {/* ------------------------------------------ */}

    </Grid>
  )
}

function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(RequestCard)