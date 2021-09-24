import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

function Requests () {
  // Details window
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  
  const handleClose = () => {
    setOpen(false);
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
  
  // elevated boxes

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }))

  const lightTheme = createTheme({ palette: { mode: 'light' } })

  return (
    <>
    <h3>Requests</h3>

    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[1].map((elevation) => (
                <Item key={elevation} elevation={2} onClick={handleClickOpen('paper')}>
                  {`Request Title`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>

    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">Request Title</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            > 
          Description of request, Description of request, Description of request, Description of request,
          Description of request, Description of request, Description of request, Description of request,
          Description of request, Description of request, Description of request, Description of request,
          Description of request, Description of request, Description of request, Description of request
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button onClick={handleClose}>Offer to help</Button>
        </DialogActions>
      </Dialog>
    </div>
  </>
  );
}

export default Requests