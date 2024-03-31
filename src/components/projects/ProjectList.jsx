import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import { ProjectListWrap } from './ProjectsStyle';

const ProjectList = ({data}) => {
    const [proidx, setProidx] = useState(0);

    const onSelect = (index) => {
        setProidx(index);
    };

 
    return (
        <ProjectListWrap>
            {
              data.map((item,idx)=> <ProjectItem key={item.id} idx={idx} isActive={proidx === idx} item={item} onSelect={onSelect}/>)
            }
        </ProjectListWrap>
    );
};

export default ProjectList;