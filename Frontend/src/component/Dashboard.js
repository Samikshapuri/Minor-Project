import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const jwt = require('jsonwebtoken');

function Dashboard() {

  const history = useHistory();

  async function populateQuote(){
    const req = await fetch('http://localhost:1337/api/quote',{
      headers: {
        'x-access-token' : localStorage.getItem('token'),
      },
    })
    const data = req.json();
    console.log(data);
  }

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      const user = jwt.decode(token);
      if(!user){
        localStorage.removeItem('token');
        history.replace('/login');
      }
      else{
        populateQuote()
      }
    }
  },[])

  return (

    
    <div>Quote page</div>
  )
}

export default Dashboard