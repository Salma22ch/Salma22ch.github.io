import React from 'react'
import { inpt, ip, telecom, my } from '../assets/technology'
const Aboutme = () => {
  return (
    <div className="main-timeline-container" id="about">
      <div className="skills-header">
        <h2> Abou 📑 me </h2>
        <div className='introduction'>
        🍀 During my studies, I had the chance to study in the most prestigious engineering schools in Morocco and in France. This experience allowed me to explore fascinating domains of study such as software engineering, computer graphics, as well as strategy and market organization.
        </div>
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
          <img src={ip} />
          <div className="vertical-line"></div>
          <img src={telecom} />
          <div className="vertical-line"></div>
          <img src={inpt} />
          <div className="vertical-line"></div>
          <img src={my} />
        </div>
        <div className="info-timeline">
          <div className="content">
            <h3>Institut Polytechnique de Paris </h3>
            <p> Master 2 Interaction, graphics, design </p>
            <p><b>GPA</b> 4/4</p>
          </div>
          <div className="content">
            <h3>Telecom Paris </h3>
            <p> Engineering degree in double major: </p>
            <p><b>IGR</b> (3D & interactive systems)</p>
            <p> <b>MODS</b> (Markets, Organization, Data, Strategy study track) </p>
            <p><b>GPA</b> 4/4</p>
          </div>
          <div className="content">
            <h3>Institut national des postes et télécommunications </h3>
            <p> Software engineering degree</p>
          </div>
          <div className="content">
            <h3>Preparatory classes Moulay Youssef </h3>
            <p> Mathematics and Physics post-secondary studies. </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutme
