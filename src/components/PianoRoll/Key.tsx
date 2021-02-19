const emptyArray = [...new Array(8)];

const Key = ({ note, onClick }) => {
  const halfStep = note.includes("#");

  return (
    <div key={note} className="row">
      <div className={["note", halfStep ? "half-step" : ""].join(" ")}>
        {note}
      </div>
      {emptyArray.map((_, i) => {
        return (
          <button
            className={["step"].join(" ")}
            onClick={() => onClick(note)}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Key;
