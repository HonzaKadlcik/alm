import { deleteMsg } from "@/app/actions/msgActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { msgType } from "@/components/shared/msgTypes";

const DeleteMsg = ({ msg }: { msg: msgType }) => {
  return (
    <Form action={deleteMsg}>
      <input type="hidden" name="inputId" value={msg.id} />
      <Button
        text="Vymazat"
        type="submit"
      />
    </Form>
  );
};

export default DeleteMsg;
