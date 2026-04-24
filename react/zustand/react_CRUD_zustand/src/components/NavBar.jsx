import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="bg-amber-500 p-2">Home</NavLink>
      <NavLink to="/adduser" className="bg-amber-500 p-2 m-2" end>Add user</NavLink>
      <NavLink to="/filter" className="bg-amber-500 p-2 m-2">Filter User</NavLink>
      <NavLink to="/search" className="bg-amber-500 p-2 m-2">Search</NavLink>
    </nav>
  );
}

export default NavBar;
