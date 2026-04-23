// import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Modal from 'react-bootstrap/Modal';

import '../../App.css';
import '../Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioSection() {
  // const [modalState, setModalState] = useState({});
  
  // const handleShowModal = (modalId) => {
  //   setModalState({ ...modalState, [modalId]: true });
  // };

  // const handleCloseModal = (modalId) => {
  //   setModalState({ ...modalState, [modalId]: false });
  // };

  return (
    <div>
      <div className="container-portfolio w-container-timeline">
        <div>
          <h1 className="timeline-text" style={{fontWeight: 'bold'}}>
            &gt; A small collection of stuff I've made & worked on
          </h1>
        </div>

        <div>
          <h3 className="timeline-text-domin">
            /Games & Media/
          </h3>
        </div>
          <div className="cardsholder">
          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Godot.jpg" />
            <Card.Body>
              <Card.Title>Godot Games</Card.Title>
              <Card.Text>
                I have worked with the Godot game engine and GDScript to make 2 games, a Beat'Em Up- and Rhythm game.
              </Card.Text>
              <Card.Text>  
                One of these games is available on Github:
                  <br></br>

                <a href="https://github.com/Jetss3/Beat-Em-UP-Godot-3.4" target="Github" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    // onClick={() => handleShowModal('modal2')}
                  >
                    Beat'Em Up Github Repository
                  </Button>
                  </a>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Unity.jpg" />
            <Card.Body>
              <Card.Title>Unity Games</Card.Title>
              <Card.Text>
                I've worked a lot with the Unity game engine and C#, and have made multiple types of games like Rhythm, VR shooter, Puzzle & Roguelike games.
              </Card.Text>
              <Card.Text>
                Three of these games are available on Github:

                  <a href="https://github.com/Jetss3/VGuns-Unity-VR" target="Github" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    // onClick={() => handleShowModal('modal2')}
                  >
                    Unity VR Game Github Repository
                  </Button>
                  </a>

                  <a href="https://github.com/Jetss3/KTANE-Unity-GameJam" target="Github" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    // onClick={() => handleShowModal('modal2')}
                  >
                    GameJam Github Repository #1
                  </Button>
                  </a>

                  <a href="https://github.com/Jetss3/Deminic-GameBeats-Unity-2023-GameJAM" target="Github" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    // onClick={() => handleShowModal('modal2')}
                  >
                    GameJam Github Repository #2
                  </Button>
                  </a>
              </Card.Text>


            </Card.Body>
          </Card>

          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Blender.jpg" />
            <Card.Body>
              <Card.Title>Blender Animations & Modelling</Card.Title>
              <Card.Text>
                In multiple projects I've used Blender to make 3D models, rigs and characters for games and animations.
              </Card.Text>

              <Card.Text>
                Some of my models are available on Github:

               <br></br> 

              <a href="https://github.com/Jetss3/Blender-Projects/" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Blender Github Repository
              </Button>
              </a>
              </Card.Text>
            </Card.Body>
          </Card>

          
          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Extinguished.jpg" />
            <Card.Body>
              <Card.Title>Extinguished</Card.Title>
              <Card.Text>
                I worked on a small horror game for CreaTe with 3 other people, called Extinguished.
                The game will start at the top of the lighthouse and go down the proverbial rabbit hole.
              </Card.Text>

              <Card.Text>
                Check it out here:

               <br></br> 

              <a href="https://www.youtube.com/watch?v=CzKepFMgUYo" target="Youtube" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Game Trailer
              </Button>
              </a>

                            <a href="https://jorkey.itch.io/extinguished" target="Itch" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Itch Page
              </Button>
              </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h3 className="timeline-text-domin">
            /Courses/
          </h3>
        </div>

        <div className='cardsholder'>

          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Metis.png" />
            <Card.Body>
              <Card.Title>Metis Montessori Lyceum Coderclass</Card.Title>
              <Card.Text>
                In the Coderclass program at MML, going from the first through sixth grade of secondary school, I received 5 hours of weekly lessons in computer science. 
              </Card.Text>
              <a href="https://hetmml.nl/vakken/coderclass/" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Learn More
              </Button>
              </a>
            </Card.Body>

          </Card>

          <Card className=" portcard text-center">
            {/* <Card.Img variant='top' src='./Images/Pain.jpg'></Card.Img> */}
            <Card.Body>
              <Card.Title>UT Basic Physics Course</Card.Title>
              <Card.Text>
                An Introducion to Physics from the University Twente given by               <a href="https://people.utwente.nl/e.l.deweerd" target="Eddy" rel="noopener noreferrer">
                Eddy de Weerd
              </a>.
              </Card.Text>
            </Card.Body>

          </Card>

          
          <Card className=" portcard text-center">
            <Card.Img variant='top' src='./Images/Pain.jpg'></Card.Img>
            <Card.Body>
              <Card.Title>VU C++ Course</Card.Title>
              <Card.Text>
                An Introducion to C++ from the Vrije Universiteit (Free University) based in Amsterdam.
              </Card.Text>
              <a href="https://www.codegrade.com/case-studies/vrije-universitieit-amsterdam" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Course
              </Button>
              </a> 
            </Card.Body>


          </Card>

          
          <Card className=" portcard text-center">
            <Card.Img variant='top' src='./Images/Math.png'></Card.Img>
            <Card.Body>
              <Card.Title>Math for Game Devs Youtube Course</Card.Title>
              <Card.Text>
                I went through a gamedev-centric mathematics course by Freya Holmér on youtube.
              </Card.Text>

              <a href="https://www.youtube.com/playlist?list=PLImQaTpSAdsArRFFj8bIfqMk2X7Vlf3XF" target="Youtube" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Playlist
              </Button>
              </a>

            </Card.Body>


          </Card>

        </div>

        <div>
          <h3 className="timeline-text-domin">
            /Technical/
          </h3>
        </div>

        <div className='cardsholder'>
          

          <Card className=" card text-center">
              <Card.Body>
              <Card.Title>Camera Face Recognition</Card.Title>
              <Card.Text>
                    I made a Facial Recognition program, using the ResNetV1 Tensorflow algorithm from David Sandberg.
              </Card.Text>
              <a href="https://github.com/Jetss3/Camera-Facial-Recognition-System-Python" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Github Repository
              </Button>
              </a>

            <a href="https://github.com/davidsandberg/facenet" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Original Resnet V1 Github Repository
              </Button>
              </a>
            </Card.Body>
            <Card.Img variant="top" src="./Images/FaceRec.png" />
          </Card>


<Card className=" card text-center">
            <Card.Body>
              <Card.Title>China's Surveillance systems: a paper</Card.Title>
              <Card.Text>
                    I wrote a paper with a classmate about China's surveillance system as my final report for highschool.
              </Card.Text>
              <a href="https://drive.google.com/file/d/1TQf4TSH73vsjAW-ZWd14E2sC0FDlWO04/view?usp=sharing" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Read
              </Button>
              </a>
            </Card.Body>
            <Card.Img variant="top" src="./Images/Dissertation.png" />
          </Card>


          <Card className=" card text-center">
              <Card.Body>
              <Card.Title>'Where is Waldo?' CNN Detection</Card.Title>
              <Card.Text>
                    Together with a teammate we made a lightweight CNN to look for Waldo within a picture of a book; with a fucntional gui and made to use a remote camera shooting utility.
              </Card.Text>
              <a href="https://github.com/Jetss3/Where-is-Waldo-CNN-Detector/" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Github Repository
              </Button>
              </a>

            <a href="https://www.linkedin.com/posts/jetze-hettema-6b1551293_for-module-7-of-create-hands-on-ai-silvan-ugcPost-7452846308714835970-Lxxb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcYC6UBa8D98SQjZAd2yh3TJQ1_17e2wi0
            " target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                LinkedIn post
              </Button>
              </a>
            </Card.Body>
            <Card.Img variant="top" src="./Images/Waldo.png" />
          </Card>

          </div>

        <div>
          <h3 className="timeline-text-domin">
            /Other/
          </h3>
        </div>

          <div className='cardsholder'>

         <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/Website.jpg" />
            <Card.Body>
              <Card.Title>Multiple Websites (HTML, CSS, JS & React)</Card.Title>
              <Card.Text>
                This website is the result of me working with HTML, CSS, JS and combining that into one React website. 
              </Card.Text>
              <a href="https://redactedcafe.nl/#/" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Website
              </Button>
              </a>

              <a href="https://github.com/Jetss3/React-Portfolio-Website/tree/main" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                Github Repository
              </Button>
              </a>
            </Card.Body>
          </Card>

          <Card className=" portcard text-center">
            <Card.Img variant="top" src="./Images/SlimeVR.jpg" />
            <Card.Body>
              <Card.Title>3 Versions of SlimeVR Trackers</Card.Title>
              <Card.Text>
                I've made 3 versions of SlimeVR Trackers (IMU-based motion trackers for VR games like VRChat and Blades & Sorcery) with the <a href='https://hyperion.smeltie.dev/'>Hyperion</a> & <a href='https://github.com/Sorakage033/SlimeVR-CheeseCake'>Cheesecake</a> trackers as a base to work off. 
              </Card.Text>
              <a href="https://docs.slimevr.dev/" target="Github" rel="noopener noreferrer">
              <Button
                variant="link"
                // onClick={() => handleShowModal('modal2')}
              >
                SlimeVR Documentation
              </Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        </div>
      </div>

  );
}

export default PortfolioSection;
