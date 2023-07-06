import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function Create(){
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    const history=useNavigate();
    const header={"Acess-Control-Allow-Origin":"*"};
    function handleSubmit(e){
         e.preventDefault();
        console.log("button clicked");
        console.log(name,email);

        axios.post("https://64a40bbcc3b509573b56f7fc.mockapi.io/CrudbyIntern", {
            name:name,
            email:email,
        })
          .then(function (response) {
            console.log(response);
            window.location.assign('/read');
          })
          .catch(function (error) {
            console.log(error);
          });
        
        
    }
    return(
        <>
        <h1 style={{backgroundColor: "lightblue", textalign:"center" ,color:"red",padding: "10px",
      fontFamily: "Arial",textAlign:"center"}}>CREATE</h1>
        <form>nnn
        <div className="form-group">
            <label htmlFor="exampleInputPassword1" /> Name
            <input value={name} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" 
            onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1" />Email address
            <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            placeholder="Enter email" 
            onChange={(e)=>setEmail(e.target.value)}/><br />
            
        </div>
        
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1" />Check me out
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
        </form>

</>

    )

}
export default Create;