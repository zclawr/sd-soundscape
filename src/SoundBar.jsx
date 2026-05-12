import { useState, useEffect, useRef } from 'react'
import './SoundBar.css'
import Slider from '@mui/material/Slider';
import {Howl, Howler} from 'howler';

export default function SoundBar(props) {
    const [decibel, setDecibel] = useState(0.0);
    const requestRef = useRef();

    var sound = new Howl({
        src: [props.soundSrc],
        loop: props.loop,
        volume: props.volume,
    });

    sound.on('play', () => {
        // Access the underlying Web Audio API context and node
        const ctx = Howler.ctx;
        const analyser = ctx.createAnalyser();

        const node = sound._sounds[0]._node;
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
            let db = 20 * Math.log10(rms / 255); // Normalized to 0-1
            setDecibel((prevDb) => db)

            if (sound.playing()) {
                requestAnimationFrame(getDecibels);
            }
        }

        getDecibels();
    });

    useEffect(() => {
        sound.play();
    }, [props.volume])

  return (
    <div key={decibel} className="container">
      <Slider sx={{ width: 700 }} value={decibel} min={-70} max={0} size='medium' disabled/>
      <p>{decibel.toFixed(2)} db</p>
    </div>
  )
}
