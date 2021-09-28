import React, { useState } from 'react';
import { connect } from 'react-redux';

import Logout from './Logout'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link'

function Nav() {


  // const useStyles = makeStyles({
  //   logo: {
  //     maxWidth: 160,
  //   }
  // })
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    <Logout/>
  }



  return (
    
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" sx={{ background: '#91A6FF' }}  >
        <Toolbar>
          {/* <Box sx={{ width: 30, height: 30}}>  */}
          <Link href='/dashboard'>
          <img sx={{ width: 3, height: 3}} src='images/logofull.png' alt="logo" className='image' />

          </Link>
          {/* </Box> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ 
            display: { 
              xs: 'none', 
              md: 'flex' 
              } 
          }}>
            <AccountCircle onClick={handleMenu}/>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href='/dashboard'><MenuItem color='secondary' onClick={handleClose}>Dashboard</MenuItem></Link>
                <Link href='/profile'><MenuItem color='secondary' >My Profile</MenuItem></Link>
                {/* <MenuItem onClick={logout}>Logout</MenuItem> */}
                <MenuItem><Logout/></MenuItem>
              </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default connect()(Nav)

