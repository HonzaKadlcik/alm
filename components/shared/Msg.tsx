import EditMsg from "./EditMsg";
import DeleteMsg from "./DeleteMsg";
import ChangeMsg from "./ChangeMsg";
import { msgType } from "@/components/shared/msgTypes";

const Msg = ({ msg }: { msg: msgType }) => {
  const todoStyle = {
    textDecoration:
      msg.isCompleted === true ? "line-through" : "none",
    opacity: msg.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div>
      <div className="flex TD-text">
        <p>{msg.title}</p>
      </div>
      <div className="flex">
        <ChangeMsg msg={msg} />
        <EditMsg msg={msg} />
        <DeleteMsg msg={msg} />
      </div>
    </div>
  );
};

export default Msg;
