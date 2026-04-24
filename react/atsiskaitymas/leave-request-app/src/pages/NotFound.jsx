import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Go to home page</Link>
    </>
  );
}
