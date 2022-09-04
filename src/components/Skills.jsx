import React from 'react'
import Tilt from 'react-vanilla-tilt'
import { react, angular, html, css, node, js, flutter, java, unity, opengl, threejs, mysql, oracle, mongodb , cplusplus, python, opencv, tableau, altair, D3}
  from '../assets/technology'

const Skills = () => {
  return (
    <div className="main-skills-container" id="skills">
      <div className="skills-header">
        {/* 3d model */}
        <h2> Skil💻s </h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum cumque blanditiis hic, exercitationem sunt vero dolor doloribus odio repudiandae obcaecati, quam sint, deleniti laboriosam suscipit non libero deserunt rerum!</p> */}
        {/* <h2> ......... </h2> */}
      </div>
      <div className="skills-card">
        <Tilt options={{ scale: 2 }} id="tilt-single-card">
          <div className="single-card">
            <h4>Web Developement</h4>
            <div className='tech-row'>
              <img src={html} />
              <img src={css} />
              <img src={js} />
              <img src={node} />
              <img src={react} />
              <img src={angular} />
            </div>
            <h4>Mobile Developement</h4>
            <div className="tech-row">
              <img src={java} />
              <img src={flutter} />
            </div>
            <h4>3D/VR Developement</h4>
            <div className="tech-row">
              <img src={unity} />
              <img src={opengl} />
              <img src={threejs} />
            </div>
            <h4>Database management</h4>
            <div className="tech-row">
              <img src={mysql} />
              <img src={mongodb} />
              <img src={oracle} />
            </div>
          </div>
        </Tilt>

        <Tilt options={{ scale: 2 }} id="tilt-single-card">
          <div className="single-card">
            <h4>Computer vision</h4>
            <div className="tech-row">
              <img src={opencv} />
              <img src={python} />
              <img src={cplusplus} />
            </div>
            <h4>Data visualisation</h4>
            <div className="tech-row">
              <img src={D3} />
              <img src={altair} />
              <img src={tableau} />
            </div>
            <h4>Problem solving</h4>
            <div className="tech-row">
              <img src={js} />
              <img src={python} />
              <img src={cplusplus} />
            </div>
          </div>
        </Tilt>

      </div>


    </div>
  )
}

export default Skills
