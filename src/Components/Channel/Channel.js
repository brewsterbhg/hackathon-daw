import "./Channel.scss";

const Channel = ({channel}) => {
  return (
    <div className="channel">
        <div className="channel__controls">
        <p>{channel.name}</p>
        </div>
        <div className="channel__track "></div>
    </div>
  );
}

export default Channel;
