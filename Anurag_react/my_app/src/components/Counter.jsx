import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)
    const add= () => {
        setCounter(count+1)
        
    }
        
    const sub= () => {
        setCounter(count - 1)
    }

  return (
      <div>
          <br /><br /><br /><br />
          <Typography variant='h4'>Count= {count}</Typography>
          
          <Button variant='contained' onClick={add}>+</Button>
            &nbsp;
          <Button variant='contained' color='secondary' onClick={sub}>-</Button>
    </div>
  )
}

export default Counter