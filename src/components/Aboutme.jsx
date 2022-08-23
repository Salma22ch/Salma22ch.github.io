import React from 'react'
import { inpt, ip, telecom } from '../assets/technology'
const Aboutme = () => {
  return (
    <div className="main-skills-container">
      <div className="skills-header">
        <h2> Abou📃me </h2>
        {/* double diplôme + expérience à l'international */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum cumque blanditiis hic, exercitationem sunt vero dolor doloribus odio repudiandae obcaecati, quam sint, deleniti laboriosam suscipit non libero deserunt rerum!</p>
        {/* differenct courses  in #interaction/UI conception/ Advanced programmation/ VR experience/ computer vision*/}
      </div>

      <div className="timeline">

        <div className="container left ">
          <div className="content">
            <h2>2022/2023</h2>
            {/* <img src={ip} /> */}
            <p> Institut polytechnique de Paris (IP Paris)</p>
            <p> Master 2 IGD</p>
          </div>
        </div>

        <div className="container right ">
          <div className="content">
            <h2>2021/2022</h2>
            <div>
              {/* <img src={telecom} /> */}
              <p>Telecom Paris  GPA 4/4</p>
              <p>Double major : MODS/IGR</p>
            </div>
          </div>
        </div>


        <div className="container left ">
          <div className="content">
            <h2>2019/2021</h2>
            {/* <img src={inpt} /> */}
            <p>Institut national des postes et télécommunications (INPT) </p>
            <p>Enginnering degree in Software engineering</p>
          </div>
        </div>
        <div className="container right ">
          <div className="content">
            <h2>2017/2019</h2>
            <p>Preparatory classes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
