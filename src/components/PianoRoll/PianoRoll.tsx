import { useState, useEffect } from "react";
import * as Tone from "tone";
import Key from "./Key";

import { notes } from "../../data/notes";

import "./piano-roll.css";

const SEQUENCE_LENGTH = 9;

function generateBlankSequence() {
  const grid = [];

  for (let i = 0; i < SEQUENCE_LENGTH; i++) {
    let column = notes.map((note) => ({ note, isActive: false }));
    grid.push(column);
  }

  return grid;
}

type Column = {
  note: string;
  isActive: boolean;
};

const PianoRoll = () => {
  const [sequence, setSequence] = useState(generateBlankSequence());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentColumn, setCurrentColumn] = useState(null);

  const synth = new Tone.PolySynth().toDestination();

  function handleNoteClicked(clickedColumn: number, clickedNote: number) {
    let updatedSequence = sequence.map(
      (columns: Column[], sequenceIndex: number) =>
        columns.map((col, colIndex) => {
          let colCopy = Object.assign({}, col);

          if (sequenceIndex === clickedColumn && colIndex === clickedNote) {
            colCopy.isActive = !col.isActive;
          }

          return colCopy;
        })
    );

    setSequence([...updatedSequence]);
  }

  const playClicked = async () => {
    let music: string[][] = [];

    sequence.forEach((column) => {
      let columnNotes: string[] = [];
      column.map(
        (shouldPlay) => shouldPlay.isActive && columnNotes.push(shouldPlay.note)
      );
      music.push(columnNotes);
    });

    await Tone.start();

    const Sequencer = new Tone.Sequence(
      (time, column) => {
        setCurrentColumn(column);

        synth.triggerAttackRelease(music[column], "8n", time);
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
    );

    if (isPlaying) {
      setIsPlaying(false);
      setCurrentColumn(null);

      await Tone.Transport.stop();
      await Sequencer.stop();
      await Sequencer.clear();
      await Sequencer.dispose();

      return;
    }
    setIsPlaying(true);

    await Sequencer.start();
    await Tone.Transport.start();
  };

  return (
    <>
      <button onClick={playClicked}>{!isPlaying ? "Play" : "Stop"}</button>
      <div className="row">
        {sequence.map((column, columnIndex) => {
          return (
            <div key={columnIndex + "-column"}>
              {column.map(({ note, isActive }, noteIndex) => {
                if (columnIndex === 0) {
                  return (
                    <div
                      className={[
                        "note",
                        note.includes("#") ? "half-step" : "",
                      ].join(" ")}
                    >
                      {note}
                    </div>
                  );
                }
                return (
                  <Key
                    note={note}
                    isActive={isActive}
                    onClick={() => handleNoteClicked(columnIndex, noteIndex)}
                    key={note + columnIndex}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PianoRoll;
