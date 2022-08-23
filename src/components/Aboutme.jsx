import React from 'react'
import { inpt, ip, telecom, my } from '../assets/technology'
const Aboutme = () => {
  return (
    <div className="main-skills-container">
      <div className="skills-header">
        <h2> Abou📃me </h2>
        {/* double diplôme + expérience à l'international */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum cumque blanditiis hic, exercitationem sunt vero dolor doloribus odio repudiandae obcaecati, quam sint, deleniti laboriosam suscipit non libero deserunt rerum!</p>
        {/* differenct courses  in #interaction/UI conception/ Advanced programmation/ VR experience/ computer vision*/}
      </div>

      {/* timeline */}
      <div className='container-timeline'>
         <div className="year-timeline">
          <h3>2022/2023</h3>
          <h3>2021/2022</h3>
          <h3>2019/2021</h3>
          <h3>2017/2019</h3>
         </div>
          <div className="img-timeline">
              <div className="vertical-line"></div>
              <img src={ip}  />
              <div className="vertical-line"></div>
              <img src={telecom}  />
              <div className="vertical-line"></div>
              <img src={inpt}  />
              <div className="vertical-line"></div>
              <img src={my}  />
          </div>
          <div className="info-timeline">
           <div className="content">
            <h3>Institut Polytechnique de Paris </h3>
            <p> Master 2 Interaction, graphics, design </p>
           </div>
           <div className="content">
            <h3>Telecom Paris </h3>
            <p> Engineering degree  in 3D & interactive systems (IGR) and Markets, Organization, Data, Strategy study track (MODS)  </p>
           </div>
           <div className="content">
            <h3>Institut Polytechnique de Paris </h3>
            <p> Engineering degree in software engineering</p>
           </div>
           <div className="content">
            <h3>Preparatory classes Moulay Youssef </h3>
            <p> Mathematics and Physics post-secondary studies leading to the nation-wide com-
petitive exam for admission to a graduate engineering school. </p>
           </div>
          </div>
      </div>

    </div>
  )
}

export default Aboutme
