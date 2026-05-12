import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {Howl, Howler} from 'howler';
import {useEffect, useRef} from 'react';
import SoundBar from './SoundBar'

function App() {
  const customMarks = [
    { value: 1650, label: '1650'},
    { value: 1895, label: '1895'},
    { value: 1965, label: '1965'},
    { value: 2026, label: 'Present'},
  ];

  const distanceDict = { 
    1650: {
      "natural": 0.5,
      "airport": 0.0,
      "train": 0.0,
    },
    1895: {
      "natural": 0.5,
      "airport": 0.0,
      "train": 0.5,
    },
    1965: {
      "natural": 0.5,
      "airport": 0.4,
      "train": 0.8,
    },
    2026: {
      "natural": 0.5,
      "airport": 1.0,
      "train": 0.8,
    },
  };

  const [sliderVal, setSliderVal] = useState(1650);
  const [naturalVolume, setNaturalVolume] = useState(distanceDict[1650]['natural'])

  function valuetext(val) {
      return `${val}`;
  }

  const handleSliderChange = (e) => {
    setSliderVal(e.target.value); 
  };

  useEffect(() => {
    let dists = distanceDict[sliderVal]
    setNaturalVolume(dists['natural'])
  }, [sliderVal]);

  return (
    <>
      <section id="center">
        <div>
          <h1>Birdsong and Human Noise</h1>
           <h2>An Unfortunate Chorus</h2>
        </div>
      <div style={{ width: 900, padding: 4}}>
        <Slider 
          getAriaValueText={valuetext}
          step={null}
          min={1650}
          max={2026}
          marks={customMarks}
          valueLabelDisplay={"auto"}
          onChange={handleSliderChange}
        />
      </div>
      <SoundBar name={"Natural"} soundSrc={'waiting.mp3'} loop={true} volume={naturalVolume}/>
      <SoundBar name={"Airport"} loop={true} volume={naturalVolume}/>
      <SoundBar name={"Railroad"} loop={true} volume={naturalVolume}/>
      </section>
      <div>
        <a>Favicon image from pngtree.com/</a>
      </div>
    </>
  )
}

export default App
