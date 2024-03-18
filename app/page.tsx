import { PrismaClient } from "@prisma/client";
import AddMsg from "@/components/shared/AddMsg";
import Msg from "@/components/shared/Msg";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.msg.findMany({});
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="NP">
        <AddMsg />
        <div className="NP-TD">
          {data.map((msg, id) => (
            <div key={id}>
              <Msg msg={msg} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
