
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer1 from './Timer1';
import Timer2 from './Timer2';
import Timer3 from './Timer3';
import { Reset } from './Reset';




import { Col, Container, Row } from 'react-bootstrap';
import { useCallback, useEffect, useState } from 'react';




function App() {
 

  const[flag1,setflag1]=useState(true)
  const[flag2,setflag2]=useState(false)
  const[flag3,setflag3]=useState(false)
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [num3, setnum3] = useState(0)


  useEffect(() => {
       const Time=  flag1 ? setInterval(() => { 
          setnum1((last)=>last+1);
      },1000) : flag2 ? setInterval(() => {
        setnum2((last)=>last+1);
    },1000) : flag3 && setInterval(() => {
      setnum3((last)=>last+1);
  },1000)
  
     return () => clearInterval(Time)

      
    
  }, [flag1,flag2,flag3])

  
  
  const changenumber= useCallback((Timer1,Timer2,Timer3) => {
         
      
        setflag1(Timer1);
        setflag2(Timer2);
        setflag3(Timer3);
      
       
    },
    [],
  )
  


  return (
    <div className="App">
    <Container>
      <Row>
        <Col>
        <Reset setnum1={setnum1} setnum2={setnum2} setnum3={setnum3} changenumber={changenumber}/>
        </Col>
        <Col> 
         <Timer1 flag1={flag1}  num1={num1} changenumber={changenumber}  setnum2={setnum2}/>
        </Col>
          <Col>
            <Timer2 flag2={flag2}  num2={num2} changenumber={changenumber} setnum1={setnum1} setnum3={setnum3}/>
          </Col>
          <Col>
         <Timer3  flag3={flag3}  num3={num3} changenumber={changenumber} setnum2={setnum2}/>
          </Col>
      </Row>
    </Container>
    

     
    </div>
  );
}

export default App;
