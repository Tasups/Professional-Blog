import React from 'react';

import Particles from 'react-tsparticles';
import Typed from 'react-typed';

import background from '../images/portfoliobg.png';

const Header = () => {

  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
  };

  return (
    <div className="header-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.5,
              straight: true,
            },
            number: {
              density: {
                enable: false,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/*IMAGE AND DIVS ARE BELOW*********************************************************************************/}
      <img
        className="header-background-image"
        src={background}
        alt="coffee and computer"
      />
      <div className="header-main-info">
        <h1 className='header-title'>Web Development and Design</h1>
        <Typed
          className="header-typed"
          strings=
          {[
            "Web Development",
            "Web Design",
            "Web Applications",
            "Software Development",
          ]}
          typeSpeed={40}
          backSpeed={55}
          loop
        />
      </div>
    </div>
  );
}

export default Header;