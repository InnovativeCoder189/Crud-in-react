import React, { useEffect } from "react";
import { useState } from "react";

const Update=()=>{
    let [id,setId]=useState(0);
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    useEffect(()=>{
        setId(
            localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);
    
    return(
        <>
        <h2>UPDATE</h2>
        <form>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1" /> Name
            <input  type="text" value={name} className="form-control" id="exampleInputName" placeholder="Name" 
            onChange={(e)=>setName(e.target.value)}
           
            />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1" />Email address
            <input  type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}
            
            /><br />
            
        </div>
        
        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1" />Check me out
        </div>
        <button type="submit" className="btn btn-primary" 
       // onClick={handleSubmit} 
        >
            Update</button>
        </form>
        
        
        </>


    )
}
export default Update;