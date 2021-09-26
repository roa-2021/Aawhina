import React from 'react'

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
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField';


export default function RequestCard ({ request }) {
  const [open, setOpen] = React.useState(false);
  const [openSubmit, setOpenSubmit] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [scrollSubmit, setScrollSubmit] = React.useState('paper');
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClickSubmitOpen = (scrollType) => () => {
    setOpenSubmit(true);
    setScrollSubmit(scrollType);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitClose = () => {
    setOpenSubmit(false);
  };
  
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const lightTheme = createTheme({ palette: { mode: 'light' } })

  return (
      <Grid item key={request.id}>
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
        <div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          maxWidth="sm"
          fullWidth="true"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          >
          <DialogTitle id="scroll-dialog-title">{`${request.title}`}</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            > 
              <Typography variant="body1" >
                Description
              </Typography>
              <Typography variant="body2" gutterBottom >
                {`${request.details}`}
              </Typography>
              <Typography variant="body1">
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
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Back</Button>
            <Button onClick={handleClickSubmitOpen('paper')}>Offer to help</Button>
          </DialogActions>
        </Dialog>
      </div>
        {/* ----------------Submit-Form------------------- */}

      <div>
        <Dialog
          open={openSubmit}
          onClose={handleSubmitClose}
          scroll={scrollSubmit}
          maxWidth="sm"
          fullWidth="true"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          >
          {/* <DialogTitle id="scroll-dialog-title">{`${request.title}`}</DialogTitle> */}
          <DialogTitle id="scroll-dialog-title">{`Enter your details`}</DialogTitle>
          <DialogContent dividers={scrollSubmit === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            > 

              <TextField sx={{ mt: 1, width: '61ch' }} multiline rows={4} id="outlined-basic" label="Information to be sent to requester" variant="outlined" />
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Back</Button>
            <Button onClick={handleClose}>Submit Offer</Button>
          </DialogActions>
        </Dialog>
      </div>
        {/* ------------------------------------------ */}


    </Grid>
  )
}
