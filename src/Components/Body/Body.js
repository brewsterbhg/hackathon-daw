import "./Body.scss";
import Channel from "../Channel/Channel";

const Body =() => {
    const addChannel = () =>{

    }

  return (
    <div className="body">
        <button className="button" onClick={()=>{addChannel()}}>+</button>
        <Channel/>
    </div>
  );
}

export default Body;
