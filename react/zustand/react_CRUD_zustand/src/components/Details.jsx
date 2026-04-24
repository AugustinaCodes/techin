import { useParams } from "react-router";
import { getOne } from "../services/get";
import { useEffect, useState } from "react";

function Details() {
  const [user, setUser] = useState(null);
  const { userid } = useParams();

  //pagal gautą userid padaryti axios get by id ir šiame komponente atvaizduoti visą/pilną userio info

  const getuserDetails = async (id) => {
    const user = await getOne(id);
    setUser(() => user);
  };

  useEffect(() => {
    const getU = async () => await getuserDetails(userid);
    getU();
  }, [userid]);

  //   if (!user) return;

  return (
    <div className="h-20 mb-10">
      <h1>Details page </h1>
      <p>Name: {user?.username}</p>
      <p>Channel: {user?.channel}</p>
      <p>Channel: {user?.color}</p>
      <p>
        {user?.hobbies.map((hobby, index) => {
          return <span key={index}>{hobby}</span>;
        })}
      </p>
    </div>
  );
}

export default Details;
