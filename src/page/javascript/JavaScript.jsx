import React, { useEffect, useState } from 'react';
import { JavaScriptWrap } from './JavaScriptStyle';
import { useNavigate } from 'react-router-dom';
import javascriptdata from '../../assets/api/javascriptdata';

const JavaScript = () => {
    const [jdata,setJdata]=useState(javascriptdata);
    const [proidx , setProidx] = useState(0);
    const [ani , setAni ]= useState(false);
    const [ani2 , setAni2 ]= useState(false);
    
      /*  const handle = (index)=>{
        if(index !== proidx){
            setAni2(false);
            setTimeout(()=>{
                setProidx(index); // 선택한 프로젝트 업데이트
                setTimeout(()=>{
                setAni2(true); // 두번째 애니메이션을 위해 true 설정
            },100)
        },5)
        }
       }; */

        const handle = (index)=>{
        if(index !== proidx){
            setAni(false);
            setTimeout(()=>{
                setProidx(index); // 선택한 프로젝트 업데이트
            setTimeout(()=>{
                setAni(true); // 두번째 애니메이션을 위해 true 설정
            },100)
        },5)
        }
       };  

    
       useEffect(()=>{
        setTimeout(()=>{
            setAni(true);
            setAni2(true);
        },1000)
       },[])
       



    return (
        
        <JavaScriptWrap>
<div className={`javascrip-details-container ${ani2 ? 'move2' : ''}`}>

<div className={`javascrip-details ${ani ? 'animate' : ''}`}>
{/* <div className="javascrip-details"> */}
    <strong>{jdata[proidx].turn}</strong>
    <h2>{jdata[proidx].title}</h2>
    <p>{jdata[proidx].dec}</p>
    <p className="infop">{jdata[proidx].info}</p>
    <button onClick={()=>window.open(jdata[proidx].view)}>View</button>
    <button onClick={()=>window.open(jdata[proidx].url)}>Code</button>
</div>

<div className={`javascrip-img ${ani ? 'animate' : ''}`}>
    <img src={jdata[proidx].img} alt={jdata[proidx].title}/>
</div>


<div className="javascrip-select">
<p>버튼 click!!</p>
{
jdata.map((_,index)=>(
    <button key={index} className={`select-btn ${index === proidx ? 'active':''}`} 
    onClick={()=>handle(index)}></button>
))}
</div>  
</div>

        </JavaScriptWrap>
    );
};

export default JavaScript;