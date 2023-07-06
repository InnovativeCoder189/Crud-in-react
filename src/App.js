import logo from './logo.svg';
import './App.css';
import Create from './Create copy';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Read from "./Read";
import Update from "./Update";
import { useState } from 'react';



function App() {
  
  let [id,setId]=useState("");
  let [name,setName]=useState("");
   let [email,setEmail]=useState("");
  return (
    <>
    
     <div className='router'>
    <Router>
      <Routes>
        
     <Route exact path="/" element={<Create/>}> </Route>
     <Route exact path="/Read" element={<Read />} /> 
       <Route exact path="/Update" element={<Update />} />
          
        
      </Routes>
    </Router>
    </div>  
    
   </>
    
  );
}

export default App;
