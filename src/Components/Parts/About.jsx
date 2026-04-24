import React from 'react';
import bgVideo from '../../SourceFiles/Videos/ON.mov'
import noodle from '../../SourceFiles/Gifs/Noodle.gif'


import '../../App.css';
import '../Section.css';

function AboutSection() {
  return (
    <div className='about'>
      <div className='text-video-container'>

        {/* <div className='textimg'> */}
        <img className='textimg' src="./Images/Setup2.jpg" />
        {/* </div> */}

        {/* <div className='backdrop-blur' /> */}
        {/* <video className='textvid' autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" autoPlay muted />
      </video> */}


        <div class=" w-about-container">
          <img src={noodle} alt="A cool Gif" class="aboutgif" />

          <h3 className='abouttext'>
            My name is Jetze Hettema; I study Creative Technology at the University
            of Twente.
            I have quite some experience in communication, hospitality and working on smaller game development projects.          </h3>
        </div>
      </div>
    </div>
  )
}

export default AboutSection