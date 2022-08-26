import React from 'react'
import '../index.css'

const Projects = () => {
  const clickspan1 = () => {
    alert('name');
  }

  return (
    <div className="project-main-container">
      <div className="projects-header">
          <h2>Proj🚀cts</h2>
          <div className="key-words">
            <span style={{backgroundColor:"blue"}} onClick={clickspan1}>#web-dev</span>
            <span style={{backgroundColor:"peru"}}>#mobile-dev</span>
            <span style={{backgroundColor:"purple"}}>#3D/VR -dev</span>
            <span style={{backgroundColor:"crimson"}}>#Computer vision</span>
            <span style={{backgroundColor:"orange"}}>#consulting</span>
            <span style={{backgroundColor:"green"}}>#Sustainble It</span>
          </div>
      </div>
      <div className="projects-content">
       <div className="project-container">
        <h2>Delivery App</h2>
       </div>
       <div className="project-container">
       </div>
       <div className="project-container">
       </div>
       <div className="project-container">
       </div>
     
      </div>
    </div>
  )
}

export default Projects
