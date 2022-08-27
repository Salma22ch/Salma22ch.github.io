import React, { useState, useEffect } from 'react';
import '../index.css'

const Projects = () => {

  //initial projects list 
  var data=require("../projects.json")
  const [keyword, setkeyword]=useState('');
  const [projects, setProjects] = useState(data.projects);


  useEffect(()=>{
    //perfect filer works
    const filteredprojects=keyword===''?data.projects:data.projects.filter((p)=>p.tag.includes(keyword))
    setProjects(filteredprojects);
  }, [keyword]) // keyword when changed calls useEffect

  console.log(typeof(projects))
  // e.target.outerText

  return (
    <div className="project-main-container">
      <div className="projects-header">
          <h2>Proj🚀cts</h2>
          <div className="key-words">
          <span style={{backgroundColor:"grey"}} onClick={e => setkeyword('')}>#all</span>
            <span style={{backgroundColor:"blue"}} onClick={e => setkeyword(e.target.outerText)}>#web-dev</span>
            <span style={{backgroundColor:"peru"}} onClick={e => setkeyword(e.target.outerText)}>#mobile-dev</span>
            <span style={{backgroundColor:"purple"}} onClick={e => setkeyword(e.target.outerText)}>#VR/3D-dev</span>
            <span style={{backgroundColor:"crimson"}} onClick={e => setkeyword(e.target.outerText)}>#Computer-vision</span>
            <span style={{backgroundColor:"orange"}} onClick={e => setkeyword(e.target.outerText)}>#consulting</span>
            <span style={{backgroundColor:"green"}} onClick={e => setkeyword(e.target.outerText)}>#Sustainble-it</span>
          </div>
      </div>
      <div className="projects-content">
      {projects?.map((project) => (
       <div className="project-container">
        <h2>{project.Title}</h2>
       </div>
         ))}
      </div>
    </div>
  )
}

export default Projects
