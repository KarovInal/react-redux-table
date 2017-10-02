import React from 'react';
import { render } from 'react-dom';

import './style.css';
import './some.jpg';

function Test(props) {
  let { message, name } = props;
  
  fetch('http://localhost:8080/oshcwebapp-0.1.0/employees/')
    .then(res => res.json())
    .then(console.log)

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