import { useState } from 'react'
import './Home.css'
import Navbar from '../components/AppBar'

import Slider from '../../node_modules/@mui/material/Slider';
import Box from '../../node_modules/@mui/material/Box';
import {Howl, Howler} from 'howler';
import {useEffect, useRef} from 'react';
import SoundBar from '../components/SoundBar'
import BasicTabs from '../components/TabPanel';
import BirdCard from '../components/BirdCard';

function Home() {
  const customMarks = [
    { value: 1650, label: '1650'},
    { value: 1925, label: '1925'},
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
    1925: {
      "natural": 0.5,
      "airport": 0.0,
      "train": 0.8,
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

  const birdNames = [
    "Western Screech Owl (Megascops Kennicottii) ",
    "Red-tailed Hawk (Buteo Jamaicensis)",
    "Osprey (Pandion Haliaetus)",
    "Anna's Hummingbird (Calypte Anna)",
    "Surfbird (Calidris Virgata)",
    "Song Sparrow (Melospiza Melodia)"
  ]

  const birdBios = [
    "A nocturnal forager, it is particularly vulnerable to noise interference due to total dependence on acoustic prey detection. Has a distinctive trill call.",
    "Capable of detecting colors and ultraviolet wavelengths. Adults produce a screeching, raspy call used in courtship. Chicks emit higher-pitched calls to help parents locate them.",
    "Year-round resident of San Diego, commonly sighted fishing and nesting near coastal lagoons, bays, and inland reservoirs. Frequently observed at and near the La Jolla Scripps Pier.",
    "Year-round La Jolla resident (unlike most hummingbirds, which migrate to the tropics seasonally). Diet consists of nectar, tree sap, and small insects. Electrostatic properties of plumage passively facilitate pollination.",
    "A robin-sized sandpiper, it breeds in Alaska and migrates south along the Pacific Coast. Feeds at low to mid-tide on rocky and sandy intertidal zones.",
    "Notable for persistent, complex musical vocalizations used in territorial defense and mate attraction. Ecological contributions include insect pest control, seed dispersal, and use as a bio-indicator of local watershed health."
  ]

  const birdImpacts = [
    "Hunting success falls to zero; habitat abandonment; chronic stress",
    "Reduced hunting efficiency; reproductive failure; immune compromise",
    "Hearing loss; nest abandonment; reduced reproductive success",
    "Foraging disruption; vocal adaptation failure; energy imbalance",
    "Communication masking; predator detection impairment; chronic stress",
    "Song shift; delayed responses; foraging and breeding disruption"
  ]

  const birdThresholds = [
    60,
    85,
    110,
    70,
    65,
    60
  ]

  const birdImgSrcs = [
    "western_screech_owl.jpg",
    "red_tailed_hawk.jpg",
    "osprey.png",
    "annas_hummingbird.png",
    "surfbird.png",
    "song_sparrow.png"
  ]

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
    <Navbar/>
      <section id="center">
      <div style={{ marginTop: '-30px'}}>
        <h2>Destructive Interference</h2>
        <h1>Birdsong and Human Noise</h1>
      </div>
      <div style={{ marginTop: '2%'}}>
        {/* <p>We perceive the world around us first and foremost through sight. What we often disregard is the way in which the sounds of our environment shape our perception, and how those sounds change over time. Despite this, the sounds we are surrounded by are often unconsciously influence our perception of space, moment, and memory. </p>
        <br/> */}
        {/* <p>Can you recall the morning birdsong from your childhood? Do you still notice that same morning birdsong today?</p> */}
        {/* <br/> */}
        <p> Do you still notice the song of birds in the early morning? This interactive soundscape is centered in La Jolla, with the intention of investigating the effects of industrialization and the changing soundscape on local bird populations. Imagine what La Jolla may have sounded like in the pre-industrial past, and what is to come in the late capitalist future.</p>
      </div>
      <div style={{ marginLeft: '10%', marginRight: '10%'}}>
        <Slider 
          color="Green"
          getAriaValueText={valuetext}
          step={null}
          min={1650}
          max={2026}
          marks={customMarks}
          valueLabelDisplay={"auto"}
          onChange={handleSliderChange}
        />
      </div>
      <div className="outerContainer">
        <div className="innerContainer">
          <div>
            <SoundBar name={"Natural"} loop={true} volume={naturalVolume}/>
            <SoundBar name={"Airport"} loop={true} volume={naturalVolume}/>
            <SoundBar name={"Railroad"} loop={true} volume={naturalVolume}/>
          </div>
          <div style={{paddingTop: '-10px'}}>
            <h3>Species Impacted: {0}/6</h3>
          </div>
          <div className="cardContainer">
            {birdNames.map((name, index) => (
                <BirdCard
                  name={name}
                  bio={birdBios[index]}
                  imgSrc={birdImgSrcs[index]}
                  impacts={birdImpacts[index]}
                  threshold={birdThresholds[index]}
                />
              ))}
          </div>
        </div>
        <div>
          <BasicTabs year={sliderVal}/>
        </div>
      </div>
      </section>
      {/* <div>
        <a>Favicon image from pngtree.com/</a>
      </div> */}
    </>
  )
}

export default Home