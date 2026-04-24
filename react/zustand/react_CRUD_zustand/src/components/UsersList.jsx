import User from "./User";
import { Link, Outlet } from "react-router";
import useUsersStore from "../zustand/usersStore";
import SearchForm from "./SearchForm";

function UsersList() {
  const users = useUsersStore((state) => state.users);

  return (
    <div>
      <SearchForm />
      <Outlet />
      <h1>Users List</h1>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
      <Link to="/adduser">Add user</Link>
    </div>
  );
}

export default UsersList;
