import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography align='center' variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://aawhina.herokuapp.com//">
       Āwhina
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
    }}
  >
    <Container maxWidth="sm" sx={{mx: 'auto'}}>
      <Typography align='center' variant="body1">
       Made by Jo, Matt, Phill and Zoe
      </Typography>
      <Copyright />
    </Container>
  </Box>
)}