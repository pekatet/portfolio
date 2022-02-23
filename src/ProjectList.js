import React from 'react'
import {uid} from 'react-uid';
import './App.css';
import { Fragment } from 'react'
import PropTypes from 'prop-types'

function ProjectList({projects}) {
  return(
    <Fragment>
      {projects.map((item) => {
        return (
          <img className="project-img" src={(item.img)}
               alt="project"
               key={uid(item)}/>
        )
      })}
    </Fragment>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired}
  )).isRequired
}

export default ProjectList;