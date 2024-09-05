import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1> Login </h1>
          <TextField label="Name" variant="outlined" />
          <br></br>
          <br></br>
          <TextField label="Password" type="password" variant="outlined" />
          <br></br>
          <br></br>
          <Button variant="contained">Login</Button>
          
          
    </div>
  )
}

export default Login