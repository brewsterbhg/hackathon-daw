import { useSelector, useDispatch } from "react-redux";
import "./Channel.scss";
import PianoRoll from '../PianoRoll/PianoRoll'
import { setSelectedChannel } from "../../state/operations"

const Channel = ({ channel, index }) => {
  const selectedIndex = useSelector(state => state.channel.selectedChannelIndex)
  const dispatch = useDispatch();

  const selectChannel = () => {
    dispatch(setSelectedChannel(index));
  }

  return (
    <div className={index === selectedIndex ? "channel channel-selected": "channel" } onClick={() =>{selectChannel()}}>
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
