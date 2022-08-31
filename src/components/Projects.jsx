import React, { useState, useEffect } from 'react';
import '../index.css'
import { react, redux, node, flutter, css, firebase, unity, mongodb, navigacom, NNG, java, ccharp,android }
  from '../assets/technology'

const Projects = () => {

  //initial projects list 
  var data = require("../projects.json")
  const [keyword, setkeyword] = useState('');
  const [projects, setProjects] = useState(data.projects);

  // tagColor[Math.floor(Math.random()*7)


  // color array
  const tagColor = ["grey", "blue", "peru", "purple", "crimson", "orange", "green"];
  const wcolor = "peru";

  //images array

  const logsconvert = (t) => {
    if (t == "react") return react;
    if (t == "redux") return redux;
    if (t == "node") return node;
    if (t == "flutter") return flutter;
    if (t == "firebase") return firebase;
    if (t == "unity") return unity;
    if (t == "mongodb") return mongodb;
    if (t == "navigacom") return navigacom;
    if (t == "NNG") return NNG;
    if (t == "java") return java;
    if (t == "android") return android;
    if (t == "c#") return ccharp;
    if (t == "css") return css;
  }



  useEffect(() => {
    //perfect filer works
    const filteredprojects = keyword === '' ? data.projects : data.projects.filter((p) => p.tag.includes(keyword))
    setProjects(filteredprojects);
  }, [keyword]) // keyword when changed calls useEffect

  // e.target.outerText

  return (
    <div className="project-main-container" id="projects">
      <div className="projects-header">
        <h2>Proj🚀cts</h2>
        <div className="key-words">
          <span style={{ backgroundColor: "grey" }} onClick={e => setkeyword('')}>#all</span>
          <span style={{ backgroundColor: "blue" }} onClick={e => setkeyword(e.target.outerText)}>#web-dev</span>
          <span style={{ backgroundColor: "peru" }} onClick={e => setkeyword(e.target.outerText)}>#mobile-dev</span>
          <span style={{ backgroundColor: "purple" }} onClick={e => setkeyword(e.target.outerText)}>#VR/3D-dev</span>
          <span style={{ backgroundColor: "crimson" }} onClick={e => setkeyword(e.target.outerText)}>#Computer-vision</span>
          <span style={{ backgroundColor: "orange" }} onClick={e => setkeyword(e.target.outerText)}>#consulting</span>
          <span style={{ backgroundColor: "green" }} onClick={e => setkeyword(e.target.outerText)}>#sustainable-it</span>
        </div>
      </div>
      <div className="projects-content">
        {projects?.map((project) => (
          <div style={{position:'relative'}}>
            {/* idee hide/show */}
           {/* front side */}
          <div className="project-container front side" key={project.id}>
            <h4>{project.Title}</h4>
            <p>
              {project.Description}
            </p>
            <div className="buttons">
              {project.Demo !== "" && (<a href={project.Demo} target="_blank" ><button style={{backgroundColor: "rgb(137, 92, 242)"}}>Demo</button></a>)}
              {project.Github !== "" && (<a href={project.Github} target="_blank"><button style={{backgroundColor: "rgb(216, 45, 222)"}} >Github</button></a>)}
            </div>
            <div className='tags'>
              {project.tag.map((t) => (
                // <span style={{ backgroundColor: `${tagColor[project.tag.indexOf(t) + 1]}` }}>{t}</span>
                <img src={logsconvert(t)} alt={logsconvert(t)} />
              ))}
            </div>
          </div>
          {/* back side */}
        

          </div>
         

          
        ))}
      </div>
    </div>
  )
}

export default Projects
