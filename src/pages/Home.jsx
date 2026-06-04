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
    { value: 1895, label: '1895'},
    { value: 1925, label: '1925'},
    { value: 1965, label: '1965'},
    { value: 2026, label: 'Present'},
  ];

  const [sliderVal, setSliderVal] = useState(1650);
  const [naturalVolume, setNaturalVolume] = useState(0.5)
  const [cartVolume, setCartVolume] = useState(0)
  const [woodVolume, setWoodVolume] = useState(0)
  const [carVolume, setCarVolume] = useState(0)
  const [constructionVolume, setConstructionVolume] = useState(0)
  const [highwayVolume, setHighwayVolume] = useState(0)
  const [airplaneVolume, setAirplaneVolume] = useState(0)

  const distanceDict = { 
    1650: {
      "Nature": 0.5,
    },
    1895: {
      "Nature": 0.5,
      "Horse-drawn Cart": 0.2,
      "Chopping Wood": 0.05,
    },
    1925: {
      "Nature": 0.5,
      "Horse-drawn Cart": 0.1,
      "Streetcars": 0.05,
    },
    1965: {
      "Nature": 0.5,
      "Construction": 0.1,
      "Highway": 0.2,
    },
    2026: {
      "Nature": 0.5,
      "Construction": 0.2,
      "Highway": 0.4,
      "Airplanes": 0.1,
    },
  };

  const soundDbRefs = {
    "Nature": 40,
    "Horse-drawn Cart": 40, 
    "Chopping Wood": 40,
    "Streetcars": 40,
    "Construction": 80,
    "Highway": 50,
    "Airplanes": 60
  }

  const soundSrcDict = {
    "Nature": 'sounds/nature.wav',
    "Horse-drawn Cart": 'sounds/cart.wav',
    "Chopping Wood": 'sounds/wood.wav',
    "Streetcars": 'sounds/cars.wav',
    "Construction": 'sounds/construction.wav',
    "Highway": 'sounds/highway.wav',
    "Airplanes": 'sounds/plane.wav'
  }

  const soundStateDict = {
    "Nature": naturalVolume,
    "Horse-drawn Cart": cartVolume,
    "Chopping Wood": woodVolume,
    "Streetcars": carVolume,
    "Construction": constructionVolume,
    "Highway": highwayVolume,
    "Airplanes": airplaneVolume
  }

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

  const typicalVolume = {
    1650: 0,
    1895: 30,
    1925: 60,
    1965: 85,
    2026: 110
  }

  const speciesImpacted = {
    1650: 0,
    1895: 0,
    1925: 2,
    1965: 5,
    2026: 6
  }

  const birdImgSrcs = [
    "western_screech_owl.jpg",
    "red_tailed_hawk.jpg",
    "osprey.png",
    "annas_hummingbird.png",
    "surfbird.png",
    "song_sparrow.png"
  ]

  function valuetext(val) {
      return `${val}`;
  }

  const handleSliderChange = (e) => {
    setSliderVal(e.target.value); 
  };

  useEffect(() => {
    let dists = distanceDict[sliderVal]

    setNaturalVolume(dists['Nature'])

    if('Horse-drawn Cart' in dists){
      setCartVolume(dists['Horse-drawn Cart'])
    }
    else{
      setCartVolume(0)
    }
    if('Chopping Wood' in dists){
      setWoodVolume(dists['Chopping Wood'])
    }
    else{
      setWoodVolume(0)
    }
    if('Streetcars' in dists){
      setCarVolume(dists['Streetcars'])
    }
    else{
      setCarVolume(0)
    }
    if('Construction' in dists){
      setConstructionVolume(dists['Construction'])
    }
    else{
      setConstructionVolume(0)
    }
    if('Highway' in dists){
      setHighwayVolume(dists['Highway'])
    }
    else{
      setHighwayVolume(0)
    }
    if('Airplanes' in dists){
      setAirplaneVolume(dists['Airplanes'])
    }
    else{
      setAirplaneVolume(0)
    }
  }, [sliderVal]);

  useEffect(() => {
    return () => {
      Howler.stop(); 
    }
  }, [])

  return (
    <>
    <Navbar/>
      <section id="center">
      <div style={{ marginTop: '-30px'}}>
        <h2 style={{ color:"rgb(246, 246, 238)", textShadow:"0px 120px 4px rgba(0, 0, 0, 0.6)"}}>Destructive Interference</h2>
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
            <SoundBar name={"La Jolla Nature"} soundSrc={soundSrcDict["Nature"]} loop={true} volume={soundStateDict["Nature"]} dbRef={soundDbRefs["Nature"]}/>  
            <SoundBar name={"Horse-drawn Cart"} soundSrc={soundSrcDict["Horse-drawn Cart"]} loop={true} volume={soundStateDict["Horse-drawn Cart"]} dbRef={soundDbRefs["Horse-drawn Cart"]}/>  
            <SoundBar name={"Chopping Wood"} soundSrc={soundSrcDict["Chopping Wood"]} loop={true} volume={soundStateDict["Chopping Wood"]} dbRef={soundDbRefs["Chopping Wood"]}/>  
            <SoundBar name={"Streetcars"} soundSrc={soundSrcDict["Streetcars"]} loop={true} volume={soundStateDict["Streetcars"]} dbRef={soundDbRefs["Streetcars"]}/>  
            <SoundBar name={"Construction"} soundSrc={soundSrcDict["Construction"]} loop={true} volume={soundStateDict["Construction"]} dbRef={soundDbRefs["Construction"]}/>  
            <SoundBar name={"Highway"} soundSrc={soundSrcDict["Highway"]} loop={true} volume={soundStateDict["Highway"]} dbRef={soundDbRefs["Highway"]}/>  
            <SoundBar name={"Airplanes"} soundSrc={soundSrcDict["Airplanes"]} loop={true} volume={soundStateDict["Airplanes"]} dbRef={soundDbRefs["Airplanes"]}/>  
          </div>
          <div style={{paddingTop: '-10px'}}>
            <h3>Species Impacted: {speciesImpacted[sliderVal]}/6</h3>
          </div>
          <div className="cardContainer">
            {birdNames.map((name, index) => (
                <BirdCard
                  name={name}
                  bio={birdBios[index]}
                  imgSrc={birdImgSrcs[index]}
                  impacts={birdImpacts[index]}
                  threshold={birdThresholds[index]}
                  currVol={typicalVolume[sliderVal]}
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