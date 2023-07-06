import React,{useEffect} from "react";
import { useState } from "react";
function Demo(){
const[hovered,setHovered]=useState(0);

useEffect(()=>{
    console.log("use effect renders");
})
return(
    <h1>
        Hello react
    </h1>
)
}
export default Demo;


