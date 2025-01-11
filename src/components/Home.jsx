import React from 'react'
import Tilt from 'react-vanilla-tilt'
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
                    <p>  👩‍💻  a graduate of Telecom Paris with a double major in 3D Graphics Computing and Markets, Organizations, Data, and Strategies.</p>
                    <p>  😎 I enjoy building innovative applications to address impactful issues.</p>
                    <p > 🧐 I'm interested in:</p>
                        <ul className='interests'>
                            <li> # Web/Mobile/IA developement</li>
                            <li> # Quantitative Computing</li>
                            <li> # Finance</li>
                        </ul>
                    <div className="links">
                        <a href="mailto:salmachana219@gmail.com" target="_blank"><img src={mail}/></a>
                        <a href="https://www.linkedin.com/in/chana-salma/" target="_blank"><img src={linkedin}  /></a>
                        <a href="https://github.com/Salma22ch" target="_blank"><img src={github}/></a>
                    </div>
            </div>
             
            
        </div>
       
     </Tilt>
    )
}

export default Home
