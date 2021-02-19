const Key = ({ note, onClick, isActive, key }) => {
  return (
    <div key={note} className="row">
      <button
        className={["step", isActive ? "active" : ""].join(" ")}
        onClick={() => onClick(note)}
        key={key}
      />
    </div>
  );
};

export default Key;
