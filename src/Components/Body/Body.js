import { useSelector, useDispatch } from "react-redux";
import "./Body.scss";
import Channel from "../Channel/Channel";

import addChannel from "../../state/actions/index"

const Body =() => {
  const channels = useSelector(state => state.player.channels) || [];
  // const channels = [];
  //  const stateObject = useSelector(state => state)
  //  console.log("test root state Object", stateObject)

  const dispatch = useDispatch();
  const addChannel = () => {
    const newChannel = { name: "New Channel"}
    addChannel(newChannel)
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
