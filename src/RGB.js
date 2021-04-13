import React, { useState } from 'react';
import './index.css';

const RGB=()=>{

  

        const [r,setR]=useState('120');
        const [g,setG]=useState('133');
        const [b,setB]=useState('214');
    
        const[val,setVal]=useState(`rgb(${r},${g},${b})`);
        const updateR=(prop,g,b)=>{
            setR(prop);
            setVal(`rgb(${r},${g},${b})`);
            
          
        };
        const updateB=(r,prop,b)=>{
            setB(prop);
            setVal(`rgb(${r},${g},${b})`);
        };
        const updateG=(r,g,prop)=>{
            setG(prop);
            setVal(`rgb(${r},${g},${b})`);
        };
        
        
    return(
        <>
        
    <div className='container'>RGB Generator</div>
    <span className='dot' style={{background:`rgb(${r},${g},${b})`}} ></span>
    <span className='box' >{val}</span>
    <input   type="range" onChange={(event)=>updateR(event.target.value,g,b)}  min="0" max="255" defaultvalue="120"/>
    <input  type="range" onChange={event=>updateB(r,event.target.value,b)}  min="0" max="255" defaultvalue="133"/>
    <input  type="range" onChange={event=>updateG(r,g,event.target.value)}  min="0" max="255"  defaultvalue="214"/>




        </>
    )
}

export default RGB;