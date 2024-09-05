import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}  > Facebook</Typography>
          <br />
          <Link to='/s'>
            <Button variant='contained' color='secondary'>Home</Button>
          </Link>
          &nbsp;
          <Link to='/signup'>
            <Button variant='contained'>Signup</Button></Link>
          &nbsp;
          <Link to='/login'>
            <Button variant='contained' color='secondary'>Login</Button></Link>
          &nbsp;
          <Link to='/c'>
            <Button variant='contained'>Count</Button>
          </Link>
          &nbsp;
          <Link to='/zxy'>
            <Button variant='contained' color='secondary'>New</Button>
          </Link>
          &nbsp;
          <Link to='/api'>
            <Button variant='contained' color='secondary'>API</Button>
          </Link>
          &nbsp;
          <Link to='/poke'>
            <Button variant='contained' color='secondary'>Poke</Button>
          </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar