import React from 'react'
import Particles  from "react-tsparticles"; //particles js
import useWindowDimensions from "../../utils/hooks/ResizeHandler";
import { useColorMode } from "@chakra-ui/react";


function ParticleComponent({onCLick=true, onHover=false, speed=1.5, desktopAmount=20, mobileAmmount=10, area=900}) {
    const { width } = useWindowDimensions();
    const { colorMode } = useColorMode();
  return (
    <><Particles
    style={{
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: "-5",
    }}
    id="tsparticles"
    options={{
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: onCLick,
            mode: "push",
          },
          onHover: {
            enable: onHover,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: colorMode === 'dark' ? "#ffffff" : "#141414",
        },
        links: {
          color: colorMode === 'dark' ? "#ffffff" : "#141414",
          distance: 120,
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
          speed: speed,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: area,
          },
          value: width > 600 ? desktopAmount : mobileAmmount,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: width > 600 ? 5 : 3,
        },
      },
      detectRetina: true,
    }}
  /></>
  )
}

export default ParticleComponent