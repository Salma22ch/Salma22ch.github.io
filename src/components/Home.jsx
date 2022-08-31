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
        <Tilt 
        options={{ scale: 2 }}
        id="tilt"

    >
        <div className="container-home">
            
            <div className="card-home">
                <img id="my-img" src={profil} />
            </div>  

            <div className="info">
                    <h2> Hi, I'm  Salma CHANA 👋</h2>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam odit temporibus nesciunt quibusdam. Voluptate perspiciatis consequatur quam debitis fuga mollitia quos voluptates vitae, aut nihil velit, consequuntur cupiditate neque?</p>
                    <div className="links">
                        <a href="mailto:salmachana219@gmail.com"><img src={mail}/></a>
                        <a href="https://www.linkedin.com/in/chana-salma/"><img src={linkedin}  /></a>
                        <a href="https://github.com/Salma22ch"><img src={github}/></a>
                        <a href="tel:+33752114227"><img src={phone} /></a>
                    </div>
            </div>
             
            
        </div>
       
     </Tilt>
    )
}

export default Home
