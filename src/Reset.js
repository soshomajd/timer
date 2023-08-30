import React from 'react'
import { Button } from 'react-bootstrap'

export const Reset = ({setnum1,setnum2,setnum3,changenumber}) => {

  return (
    <Button variant='danger' onClick={()=>{
        setnum1((last)=>last*0)
        setnum2((last)=>last*0)
        setnum3((last)=>last*0)
        changenumber(true,false,false)
        
    }}>Reset</Button>
  )
}
