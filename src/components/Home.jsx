import React from 'react'
import Tilt from 'react-vanilla-tilt'
import phone from '../assets/phone.png'
import github from '../assets/github.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import profil from '../assets/profil.jpg'
import '../index.css'

const Home = () => {
    return (
        <Tilt options={{ scale: 2 }} id="tilt" >
        <div className="container-home" id="home">
            
            <div className="card-home">
                <img id="my-img" src={profil} />
            </div>  

            <div className="info">
                    <h2> Hi, I'm  Salma CHANA 👋</h2>
                    <p>  👩‍💻 a second year master student major in Interaction, Graphic and Design. I enjoy building interactive and sustainable UI for web and mobile application.</p>
                    <br/>
                    <p > 🧐 I'm interested in:</p>
                        <ul className='interests'>
                            <li> #Web/Mobile/VR developement</li>
                            <li> #Data visualisation </li>
                            <li> #Generic AI</li>
                            <li> #Computer vision</li>
                            <li> #Web 3.0</li>
                        </ul>
                    <div className="links">
                        <a href="mailto:salmachana219@gmail.com" target="_blank"><img src={mail}/></a>
                        <a href="https://www.linkedin.com/in/chana-salma/" target="_blank"><img src={linkedin}  /></a>
                        <a href="https://github.com/Salma22ch" target="_blank"><img src={github}/></a>
                        {/* <a href="tel:+33752114227" target="_blank"><img src={phone} /></a> */}
                    </div>
            </div>
             
            
        </div>
       
     </Tilt>
    )
}

export default Home
