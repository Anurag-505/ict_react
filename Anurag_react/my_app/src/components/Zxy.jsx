import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Zxy = () => {
    var [fname, setfname] = useState()

    const Input1 = () => {
        setfname("Angular")
    }
    const Input2 = () => {
        setfname('React')
    }
    const Input3= () => {
        setfname('vue')
    }
    useEffect (() => {Input1()},[])
  return (
      <div>
          <br /><br />
          <Typography variant='h4'> WELCOME TO:{fname}</Typography> 
          <Button variant='contained' onClick={Input1}>Angular</Button>
          &nbsp;
          <Button variant='contained' onClick={Input2}>React</Button>
          &nbsp;
          <Button variant='contained' onClick={Input3}>Vue</Button>

    </div>
  )
}

export default Zxy