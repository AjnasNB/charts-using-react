import React from 'react';
import './App.css';
import { Bargraph,Pchart,Table } from './components';


const App=()=> (
  

  
    <div className='body'>
     <h1 className='s1'>Interent users from 2011 to 2021</h1>
      <h2 className='s2'>Internet users in billions</h2>
     <div className='table'><Table/></div>
     <div className='App'>
        <h2 className='s3'>Bargraph of Internet users: </h2>
        <Bargraph />
        <h2 className='s3'>Piechart of Internet users: </h2>
        <Pchart />
  </div>
    </div>
  
    
);

export default App;
