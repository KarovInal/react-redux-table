import React from 'react';
import { render } from 'react-dom';

function Test(props) {
  let { message, name } = props;
  
  fetch('http://localhost:8080/oshcwebapp-0.1.0/departments')
    .then(res => res.json())
    .then(console.log)
  
  console.log('test');

  return (
    <h1>
      Test
    </h1>
  )
}

render(
  <Test />,
  document.getElementById('app')
)