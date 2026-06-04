import { useState, useEffect, useRef } from 'react'
import './SoundBar.css'
import Slider from '../../node_modules/@mui/material/Slider';
import {Howl, Howler} from 'howler';

export default function SoundBar(props) {
    const [decibel, setDecibel] = useState(0.0);
    const soundRef = useRef(null);

    if(soundRef.current == null){
        soundRef.current = new Howl({
            src: [props.soundSrc],
            loop: props.loop,
            volume: props.volume,
        });

        soundRef.current.on('play', () => {
            // Access the underlying Web Audio API context and node
            const ctx = Howler.ctx;
            const analyser = ctx.createAnalyser();

            const node = soundRef.current._sounds[0]._node;
            node.connect(analyser);
            analyser.connect(ctx.destination);

            analyser.fftSize = 1024;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            // 3. Visualization/Calculation Loop
            function getDecibels() {
                analyser.getByteFrequencyData(dataArray);

                // Calculate Average Volume (RMS)
                let sum = 0;
                for (let i = 0; i < bufferLength; i++) {
                    sum += dataArray[i] * dataArray[i];
                }
                let rms = Math.sqrt(sum / bufferLength);

                // 4. Convert RMS to dB (Approximate)
                let db = props.dbRef * Math.log10(rms);
                let db_ref = db < 0 ? 0 : db;
                setDecibel((prevDb) => db_ref)

                if (soundRef.current.playing()) {
                    requestAnimationFrame(getDecibels);
                }
            }

            getDecibels();
        });
    }

    useEffect(() => {
        soundRef.current.stop();
        soundRef.current.seek(0);
        soundRef.current.play();
        soundRef.current.volume(props.volume);
        console.log("Playing " + props.soundSrc + " at " + props.volume)
    }, [props.volume])

  return (
    <div key={decibel} className="container">
      <p>{props.name}</p>
      <Slider sx={{ width: 400 }} value={decibel} min={0} max={120} size='medium' disabled/>
      <p>{decibel.toFixed(2)} db</p>
    </div>
  )
}
