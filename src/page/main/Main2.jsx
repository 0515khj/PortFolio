import React, { useEffect, useState } from 'react';
import { Main2Wrap } from './MainStyle';
import {useNavigate} from 'react-router-dom';


const Main2 = () => {
   const [ptext , setPtext ]= useState(false);

//    const navigator = useNavigate();

   const textani = (text) =>{
    return text.split('').map((item,idx)=>
    (
    <span key={idx} style={{animationDelay:`${1.5 + idx * 0.3}s`}}>
        {item}</span>
    ))
   }

   

   /* useEffect(()=>{
    setTimeout(()=>{
        setPtext(true);
    },3000)
   },[]) */
   
    
    

    return (
        <Main2Wrap>
            
        <div className={`text ${ptext ? 'move2' : '' }`}>
            <p>{textani('HYUN＇JIN')}</p>
            <span>{textani('PORTFOLIO')}</span>
        </div>

        </Main2Wrap>
    );
};

export default Main2; 