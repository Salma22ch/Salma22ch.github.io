import React from 'react'
import Tilt from 'react-vanilla-tilt'

const Skills = () => {
  return (
    <div className="main-skills-container">
      <div className="skills-header">
        {/* 3d model */}
        <h2> 💻 </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum cumque blanditiis hic, exercitationem sunt vero dolor doloribus odio repudiandae obcaecati, quam sint, deleniti laboriosam suscipit non libero deserunt rerum!</p>
        <h2> ......... </h2>
      </div>
      <div className="skills-card">
        {/* <Tilt options={{ scale: 2 }} id="tilt-single-card"> */}
          <div className="single-card">
            <h4>UI interfaces
            </h4>
          </div>
        {/* </Tilt> */}

        <div className="single-card">
          <h4>3D developement
          </h4>
        </div>
        <div className="single-card">
          <h4>Data visualisation
          </h4>
        </div>
        <div className="single-card">
          <h4>Computer vision
          </h4>
        </div>
      </div>


    </div>
  )
}

export default Skills
