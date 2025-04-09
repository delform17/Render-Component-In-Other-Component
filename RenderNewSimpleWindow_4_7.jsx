import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

const infoStyles = {
	
	info : {
	  color : 'lightgreen',
      fontStyle : 'regular',
	  fontSize: '14px',
      fontWeight: 'normal',
	  textTransform: 'uppercase',
      margin : '0 auto',
      fontFamily : "Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif",
      
	}
}

function CheckTheNumberAndBreak(){
  var count = 0;
  const listOfValues = [2,3,5,4,8,7,9,6];
  const [info, setInfo] = useState('');
  const [numberObj, setNumberObj] = useState(listOfValues);
  

  function moreThenFore(session){

    if(numberObj[count] < 8){
       setInfo("The number wasn't found "+numberObj[count]);
        
    }
    else{
      
	  setInfo("The numer is found "+numberObj[count]);
      clearInterval(session);
        
    }
    count+=1;
  }

  useEffect(() => {
    const session = setInterval(() =>{
      moreThenFore(session);
  },2000);  
  },[]);
  
  return(
    <div>
      <p> {moreThenFore(listOfValues)} </p>
	  <p style={infoStyles.info}>{info}</p>
    </div>
    
  )
}

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<CheckTheNumberAndBreak />)

