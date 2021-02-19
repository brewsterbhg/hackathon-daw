import React, {useEffect, useState} from "react";
import { ReactComponent as PlayButton } from "../../assets/play.svg";
import { ReactComponent as PauseButton } from "../../assets/pause.svg";
import { ReactComponent as StopButton } from "../../assets/stop.svg";
import { useSelector, useDispatch } from "react-redux";
import * as Tone from "tone";
import { setPlay, setPause } from "../../state/actions";
import "./transport.css";
import Select from 'react-select';

export interface TransportPros {
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  currentBPM?: string;
}

const options = [
  { value: 120, label: 'BPM:  120' },
  { value: 100, label: 'BPM:  100' },
  { value: 40, label: 'BPM:  40' }
]

export default function Transport({
                                    onStop,
                                    currentBPM = "120",
                                  }: TransportPros) {
  const sequence = useSelector((state) => state.sequence.sequence);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const dispatch = useDispatch();
  const synth = new Tone.PolySynth().toDestination();
  const [currentColumn, setCurrentColumn] = useState(null);
  //TODO add a select element to get bmp local value
  const [bpm, setBpm] = useState(120);


  const playClicked = async () => {
    Tone.Transport.bpm.value = bpm;
    let music: string[][] = [];

    sequence.slice(1, sequence.length).forEach((column) => {
      let columnNotes: string[] = [];
      column.map(
          (shouldPlay) => shouldPlay.isActive && columnNotes.push(shouldPlay.note)
      );
      music.push(columnNotes);
    });

    await Tone.start();

    let n = 32,
        i = 0,
        numSteps = Array(n);
    while (i < n) numSteps[i++] = i;

    await Tone.start();

    const Sequencer = new Tone.Sequence(
        (time, column) => {
          setCurrentColumn(column);

          synth.triggerAttackRelease(music[column - 1], "8n", time);
        },
        numSteps,
        "8n"
    );

    if (isPlaying) {
      dispatch(setPause());
      setCurrentColumn(null);

      await Tone.Transport.stop();
      await Sequencer.stop();
      await Sequencer.clear();
      await Sequencer.dispose();

      return;
    }
    dispatch(setPlay());

    await Sequencer.start();
    await Tone.Transport.start();
  };

  const handleChangeBpm = selectedOption => {
    setBpm(selectedOption.value)
  };


  return (
      <div className="transport-container">
        <button onClick={playClicked} className="transport-button">
          {isPlaying ? (
              <PauseButton height={32} width={32} />
          ) : (
              <PlayButton height={32} width={32} />
          )}
        </button>
        <button onClick={onStop} className="transport-button">
          <StopButton height={32} width={32} />
        </button>
        <div className="react-select">
          <Select options={options}  onChange={handleChangeBpm} defaultValue={{value:120, label:'BPM: 120'}} />

        </div>

      </div>
  );
}
