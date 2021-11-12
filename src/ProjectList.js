import React from 'react'
import {uid} from 'react-uid';
import './App.css';

function ProjectList({projects}) {
  return(
    <div>
      {projects.map((item) => {
        return (
          <img className="project-img" src={(item.img)}
               alt="project"
               key={uid(item)}/>
        )
      })}
    </div>
  )
}

export default ProjectList;