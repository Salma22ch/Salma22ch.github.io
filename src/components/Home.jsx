import React from 'react'
import Tilt from 'react-vanilla-tilt'
import '../index.css'

const Home = () => {
    return (
        <Tilt 
        options={{ scale: 2 }}
        id="tilt"

    >
        <div className="container-home">
            
            <div className="card-home">
                <img id="my-img" src="https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_960_720.jpg" />
            </div>  

            <div className="info">
                    <h2> Hi, I'm  Salma CHANA 👋</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam odit temporibus nesciunt quibusdam. Voluptate perspiciatis consequatur quam debitis fuga mollitia quos voluptates vitae, aut nihil velit, consequuntur cupiditate neque?</p>
            </div>
             
            
        </div>
       
     </Tilt>
    )
}

export default Home
