import { useState, useEffect } from "react";
import * as Tone from "tone";
import Key from "./Key";

import "./piano-roll.css";

import { notes } from "../../data/notes";

const PianoRoll = () => {
  const synth = new Tone.PolySynth().toDestination();

  function playNote(note) {
    console.log(note);
    synth.triggerAttackRelease(note, "8n");
  }

  return notes.map((note, i) => {
    return (
      <span key={note} className="row">
        <Key note={note} onClick={playNote} />
      </span>
    );
  });
};

export default PianoRoll;
