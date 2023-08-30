import React from 'react'
import { Badge, Button } from 'react-bootstrap'

const Timer3 = ({flag3,changenumber,num3,setnum2}) => {
   
   console.log("third")
   
  return (
    <div>
        <Button variant='info'  onClick={()=>{
             if(flag3){
            //   setflag1(false)
            //  setflag2(true)
            //  setflag3(false)
            changenumber(false,true,false)
            setnum2(num3)

  
             } 
        }}>prev</Button>
           <h1><Badge bg='danger'>{num3}</Badge></h1> 
    </div>
  )
}
export default React.memo(Timer3)
