import { useSelector, useDispatch } from "react-redux";
import "./Body.scss";
import Channel from "../Channel/Channel";

import addChannel from "../../state/actions/index"

const Body =() => {
  const channels = useSelector(state => state.channel.channels)
  const dispatch = useDispatch()

  const addChannel = () => {
    let newChannel = { name: "New Channel"}
    dispatch(addChannel(newChannel));
  }
  return (
    <div className="daw_body">
      <button className="button" onClick={(e) => {addChannel() }}>+</button>
      {channels.map((channel, index) => {
        return (      <Channel key={index} channel={channel}/>)
      })}
    </div>
  );
}

export default Body;
