import deleData from "../services/delete";
// import { getOne } from "../services/get";
import updateData from "../services/update";
import UserEditForm from "./UserEditForm";
import { useState } from "react";
import { Link } from "react-router";

function User({ user }) {
  const [formShow, setFormShow] = useState(false);

  const likesHandler = async (id) => {
    // const user = await getOne(id);
    const { likes } = user;

    await updateData(id, { likes: likes + 1 });
  };

  return (
    <>
      {formShow && <UserEditForm user={user} setFormShow={setFormShow} />}
      <div className="border p-2">
        <p>{user.username}</p>
        <p>{user.email}</p>
        {/* <p>Likes: {user.likes}</p>
        <p>
          Hobbies:
          {user.hobbies.map((hobby, index) => (
            <span key={index}>{hobby}</span>
          ))}
        </p> */}
        <button
          className="bg-fuchsia-300 p-2"
          onClick={() => likesHandler(user.id)}
        >
          Like
        </button>
        <button
          className="bg-amber-400 p-2"
          onClick={() => {
            deleData(user.id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-green-400 p-2"
          onClick={() => {
            setFormShow((prev) => !prev);
          }}
        >
          Edit
        </button>
        <Link to={`/details/${user.id}`}>Details</Link>
      </div>
    </>
  );
}
export default User;
