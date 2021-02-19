import Key from "./Key";


import "./piano-roll.css";
import {useDispatch, useSelector} from "react-redux";
import {setSequence} from "../../state/actions";


type Column = {
    note: string;
    isActive: boolean;
};

const PianoRoll = () => {
    const sequence = useSelector(state => state.sequence.sequence);
    const dispatch = useDispatch()

    function handleNoteClicked(clickedColumn: number, clickedNote: number) {
        try {
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
            console.log("1")
            dispatch(setSequence([...updatedSequence]));
        } catch (error) {
            console.log("error at onlick ", error)
        }

    }

    return (
        <>
            <div className="row">
                {sequence.map((column, columnIndex) => {
                    return (
                        <div key={columnIndex + "-column"}>
                            {column.map(({note, isActive}, noteIndex) => {
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
