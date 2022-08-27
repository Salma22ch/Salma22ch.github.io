import React, { useState, useEffect } from 'react';
import '../index.css'

const Projects = () => {

  //initial projects list 
  var data=require("../projects.json")
  const [keyword, setkeyword]=useState('');
  const [projects, setProjects] = useState(data.projects);


  useEffect(()=>{
    //perfect filer works
    const filteredprojects=keyword===''?data:data.projects.filter((p)=>p.tag.includes(keyword))
    setProjects(filteredprojects);
    console.log(filteredprojects,keyword);
  }, [keyword]) // keyword when changed calls useEffect

  console.log(typeof(projects))
  // e.target.outerText

  return (
    <div className="project-main-container">
      <div className="projects-header">
          <h2>Proj🚀cts</h2>
          <div className="key-words">
            <span style={{backgroundColor:"blue"}} onClick={e => setkeyword(e.target.outerText)}>#web-dev</span>
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
       
      </div>
    </div>
  )
}

export default Projects
