import React, { useState } from 'react';
import { ProjectItemWrap } from './ProjectsStyle';

const ProjectItem = ({item,idx, isActive, onSelect}) => {
    const {title , dec , img, infospan,url,info,code ,per,view,turn}=item;
    const [proidx , setProidx] = useState(0);

    return (
        <ProjectItemWrap>

                    <div className="project-details">
                        <strong>{turn}</strong>
                        <h2>{title}</h2>
                        <p>{dec}</p>
                        <p className="infop">{info}</p>
                        <button onClick={()=>window.open(url)}>View</button>
                    </div>

                    <div className="project-img">
                        <img src={img} alt={title}/>
                    </div>
                   <div className="project-select">

                   <p>버튼 click!!</p> 
                   <button className={`select-btn ${isActive ? 'active' : ''}`} onClick={() => onSelect(idx)} ></button>

                   {/*  <p>버튼 click!!</p>
                    {data.map((_,index)=>(
                        <button key={index} className={`select-btn ${index === proidx ? 'active':''}`} onClick={()=>setProidx(index)}></button>
                    ))} */}
                   </div>


        </ProjectItemWrap>
    );
};

export default ProjectItem;