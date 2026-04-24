import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import UsersList from "./components/UsersList";
import { useEffect } from "react";
import SearchForm from "./components/SearchForm";
import FilterForm from "./components/FilterForm";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import ChildComponent from "./components/ChildComponent";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import useUsersStore from "./zustand/usersStore";

function App() {
  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<UsersList />}>
          <Route path="details/:userid" element={<Details />} />
        </Route>
        <Route path="/adduser" element={<YoutubeForm />} />
        <Route path="/filter" element={<FilterForm />} />
        <Route path="/search" element={<SearchForm />}>
          <Route path="child" element={<ChildComponent />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
