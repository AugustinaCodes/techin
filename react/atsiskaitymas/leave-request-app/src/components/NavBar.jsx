import { NavLink } from "react-router";

function NavBar() {
	return (
		<nav className="flex justify-center gap-3 py-4">
			<NavLink to="/" className="bg-amber-500 p-2" end>
				Home
			</NavLink>
			<NavLink to="/requests" className="bg-amber-500 p-2">
				Requests
			</NavLink>
			<NavLink to="/requests/new" className="bg-amber-500 p-2">
				New Request
			</NavLink>
		</nav>
	);
}

export default NavBar;
