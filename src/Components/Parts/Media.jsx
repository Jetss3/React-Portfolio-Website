import React from 'react';

import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

import '../../App.css';
import '../Section.css';

import WIP from '../../SourceFiles/WIP.jpg';

function MediaSection() {
  return (
    <div class="mediaContainer">

      <div className='lefttext medialeft '>
        <h3 class="whiteText medialeft-text">
          I've used Blender, Unity and Godot and have programmed in C#, C++, Python, React and GDScript.
          <br></br>
          <br></br>
          Some of my interests include Games, their development and the industry; playing guitar, reading (Roadside Picnic & The King in Yellow are one of my favorites ) and sports.
        </h3>
      </div>

      <div className='mediaright'>
        {/* <img className='rightimage' scr={WIP}/> */}

        <div className='YoutubeVideo'>
          <LiteYoutubeEmbed playlabel="Example Video" mute='false' id={''} />
        </div>

      </div>
    </div>

  )
}

export default MediaSection