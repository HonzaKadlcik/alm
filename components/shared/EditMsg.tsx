"use client";
import { edit } from "@/app/actions/msgActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";
import { msgType } from "@/components/shared/msgTypes";

const EditMsg = ({ msg }: { msg: msgType }) => {
  const [editMsg, setEditMsg] = useState(false);

  const handleEdit = () => {
    setEditMsg(!editMsg);
  };

  const handleSubmit = () => {
    setEditMsg(false);
  };
  return (
    <div>
      <Button
        onClick={handleEdit}
        text="Upravit"
      />

      {editMsg ? (
        <div className="TD-edit">
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={msg.id}
            type="hidden"
          />
          
            <Input
              type="text"
              name="newTitle"
              placeholder="Upravit zprávu"
            />

            <Button type="submit" text="Uložit" />
          
        </Form>
        </div>
      ) : null}
    </div>
  );
};

export default EditMsg;
