

import { useEffect, useState } from "react";
import { ProjectWrap } from "./ProjectStyle";
import projectdata from "../../assets/api/projectdata";
import { useNavigate } from "react-router-dom";
import { ImSpinner11 } from "react-icons/im";

const Project = () => {
    const [data,setData] =useState(projectdata);

    const [proidx , setProidx] = useState(0);
    const [ani , setAni ]= useState(false);
    const [ani2 , setAni2 ]= useState(false);

    
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
       
   /*  const handle = (index)=>{
        if(index !== proidx){
            setAni2(false);
            setTimeout(()=>{
                setProidx(index); // 선택한 프로젝트 업데이트
                // setAni(true); //첫번째 애니메이션을 위한 state를 true로 설정
            setTimeout(()=>{
                setAni2(true); // 두번째 애니메이션을 위해 true 설정
            },100)
        },5)
        }
       };  */


      

       useEffect(()=>{
        setTimeout(()=>{
            setAni(true);
            setAni2(true);
        },500)
       },[])

       
 
    return (
        <ProjectWrap>

<div className={`project-details-container ${ani2 ? 'move2' : ''}`}>

    {/* <div className={`project-details ${ani ? 'animate' : ''}`}> */}
    <div className="project-details">
     <strong>{data[proidx].turn}</strong>
     <h2>{data[proidx].title}</h2>
     <p>{data[proidx].dec}</p>
     <p className="infop">{data[proidx].info}</p>
     <button onClick={()=>window.open(data[proidx].view)}>View</button>
     <button onClick={()=>window.open(data[proidx].url)}>Code</button>
    </div>

    <div className={`project-img ${ani ? 'animate' : ''}`}>
     <img src={data[proidx].img} alt={data[proidx].title}/>
    </div>

    <div className="project-select">
    <p>버튼 click!!</p>
    {data.map((_,index)=>(
     <button key={index} className={`select-btn ${index === proidx ? 'active':''}`} 
     onClick={()=>handle(index)}></button>
    ))}
    </div>  

</div>


           
            
        </ProjectWrap>
    );
};

export default Project;