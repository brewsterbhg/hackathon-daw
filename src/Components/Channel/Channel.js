import "./Channel.scss";
import PianoRoll from '../PianoRoll/PianoRoll'
const Channel = ({channel}) => {
  return (
    <div className="channel">
        <div className="channel__controls">
        <p>{channel.name}</p>
        </div>
      <div className="channel__track ">
      <PianoRoll />
        </div>
    </div>
  );
}

export default Channel;
