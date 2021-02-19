import { useSelector, useDispatch } from "react-redux";
import "./Body.scss";
import Channel from "../Channel/Channel";

import {appendChannel} from "../../state/operations"

const Body =() => {
  const channels = useSelector(state => state.channel.channels)
  const dispatch = useDispatch()

  const addChannel = () => {
    let newChannels = [...channels];
    newChannels.push({ name: "test" })
    dispatch(appendChannel(newChannels));
  }
  
  return (
    <div className="daw_body">
      <button className="button" onClick={() => {addChannel() }}>+</button>
      {channels.map((channel, index) => {
        return (<Channel key={index} index={ index} channel={channel}/>)
      })}
    </div>
  );
}

export default Body;
