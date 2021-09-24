import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Requests () {
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
  
  return (
    <>
    <div className="offers-requests-header">
    <h3>Offers you have made:</h3>
    </div>


    <div className="offers-requests">
      <ul>
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button> 
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button>
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button>
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button>
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button>
        <li>Request Title</li> <button onClick={handleClickOpen('paper')}>See Details</button> <button>Recind offer</button>
      </ul>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Offer</Button>
        </DialogActions>
      </Dialog>
    </div>
  </>
  );
}

export default Requests