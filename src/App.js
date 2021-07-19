import React from 'react';
import './App.css';

/* 
  + - / * ==> operations
  
*/

// Importing Components
import Result from './components/result'
import Calculate from './components/calculate'

function App() {
  return (
    <div className="App">
      <Calculate />  
      <Result />
    </div>
  );
}
export default App;
