import React from "react";
import photoX from '../../Assets/images/XavyrSelfie.JPG'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Xavyr' src={photoX}/>
            </div>
            <h1 id="about">About Me</h1>
            <p className='text-background' id='aboutText'>
                Hello my name is Xavyr Rodriguez, I am a Web Developer livin in Austin Tx. Im currently enrolled and soon to graduate the UT Coding BootCamp.
            </p>
        </section>
    )
};

export default About;