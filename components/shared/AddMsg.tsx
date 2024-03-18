import { create } from "@/app/actions/msgActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddMsg = () => {
  return (
    <Form action={create}>
        <Input
          name="input"
          type="text"
          placeholder="Začněte psaním sem."
        />
        <Button type="submit" text="Přidat"/>
    </Form>
  );
};

export default AddMsg;
