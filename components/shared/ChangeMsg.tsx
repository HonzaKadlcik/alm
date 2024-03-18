import { msgStatus } from "@/app/actions/msgActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { msgType } from "@/components/shared/msgTypes";

const ChangeMsg = ({ msg }: { msg: msgType }) => {
  return (
    <Form action={msgStatus}>
      <input
        name="inputId"
        value={msg.id}
        className="border-gray-700 border"
        type="hidden"
      />
    </Form>
  );
};

export default ChangeMsg;
