import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1> Signup</h1>
          <TextField label="Name" variant="outlined" />
          <br></br>
          <br></br>
          <TextField label="Email" variant="outlined" />
          <br></br>
          <br></br>
          <TextField label="Phone No" variant="outlined" />
          <br></br>
          <br></br>
          <TextField label="Password" type="password" variant="outlined" />
          <br></br>
          <br></br>
          <TextField label="Password Confirm" type="password" variant="outlined" />
          <br></br>
          <br></br>
          <Button variant="contained">Signup</Button>
          
          
          
          
    </div>
  )
}

export default Signup