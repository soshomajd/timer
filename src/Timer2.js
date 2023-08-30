import React from 'react'
import { Badge, Button } from 'react-bootstrap'

 const Timer2 = ({flag2,changenumber,num2,setnum1,setnum3}) => {
    
   
   console.log("secend")

  return (
    <>
    <Button variant='info' className='mx-2'  onClick={()=>{
         if(flag2){
        //   setflag1(true)
        //  setflag2(false)
        //  setflag3(false)
        changenumber(true,false,false)
        setnum1(num2)


         } 
    }}>prev</Button>
      <Button variant='info' className='mx-2'  onClick={()=>{
          if(flag2){
          //   setflag1(false)
          //  setflag2(false)
          //  setflag3(true)
          changenumber(false,false,true)
          setnum3(num2)
          

  
           } 
      }}>next</Button>
      <h1><Badge bg='danger'>{num2}</Badge></h1> 
      </>

  )
}
export default React.memo(Timer2)