import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date = new Date();
console.log(date.getHours());
const time = date.getHours();

const customeStyle = {
  color: '',
}

let greeting; 

function ourgreeting(){
  if( time < 12 ){
    greeting = "Good Morning";
    customeStyle.color = 'red';

  }else if(time >= 12 && time <= 18 ) {
    greeting = "Good Afternoon";
    customeStyle.color = 'green';
    
  } else {
    greeting = "Good Evening";
    customeStyle.color = 'blue';
  }
} 

ourgreeting();

ReactDOM.render(
<h1 className='heading' style={customeStyle}>{greeting}</h1>, 
document.getElementById('root'));

