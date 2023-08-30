import React from 'react'
import { Badge, Button } from 'react-bootstrap'



 const Timer1 = ({flag1,changenumber,num1,setnum2}) => {
  console.log("first")
   
   
   
  return (
    <div>
         <Button variant='info' onClick={()=>{
           if(flag1){

          //    setflag1(false)
          //  setflag2(true)
           changenumber(false,true,false)
           setnum2(num1)
           
           } 
          
        }

         }>next</Button>
           <h1><Badge bg='danger'>{num1}</Badge></h1> 
    </div>
  );
};
export default React.memo(Timer1);