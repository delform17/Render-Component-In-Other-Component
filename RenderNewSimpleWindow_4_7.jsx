import React  from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

function CheckTheNumberAndBreak(){
  var count = 0;
  const listOfValues = [2,3,5,4,8,7,9,6];
  const [numberObj, setNumberObj] = useState(listOfValues);

  function moreThenFore(session){

    if(numberObj[count] < 8){
        console.log("Liczba nie zostala znalezona "+numberObj[count]);
        
    }
    else{
      console.log("Liczba znaleziona "+numberObj[count]);
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
      {moreThenFore(listOfValues)}
    </div>
    
  )
}

const execute = ReactDOM.createRoot(document.getElementById(('root')));
execute.render(<CheckTheNumberAndBreak />)

