import { useState } from "react";
import { useForm } from "react-hook-form";
// import { getAlldata } from "../services/get";
import { Outlet } from "react-router";
import useUsersStore from "../zustand/usersStore";

// const API_URL = import.meta.env.VITE_API_URL;

function SearchForm() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      query: "",
    },
  });

  const updateUsers = useUsersStore((state) => state.updateUsers);
  const allUsers = useUsersStore((state) => state.users);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  const [error, setError] = useState("");

  const formHandler = async ({ query }) => {
    try {
      if (query) {
        const usersFind = allUsers.filter((user) =>
          user.username.includes(query),
        );
        if (usersFind.length === 0) throw new Error("No users");

        updateUsers(usersFind);
      } else {
        fetchUsers();
        throw new Error("Enter search query");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="shadow my-2 p-2">
        {error && <p className="bg-red-200 p-2">{error}</p>}
        <h1 className="font-bold">Search User</h1>
        <form onSubmit={handleSubmit(formHandler)} noValidate>
          <div>
            <label htmlFor="query">Search by name:</label>
            <input
              type="text"
              name="query"
              id="query"
              className="border mx-2"
              {...register("query")}
            />
            <div className="bg-red-300">{errors.username?.message}</div>
          </div>
          <div>
            <input type="submit" value="Search" className="bg-blue-300 p-1" />
          </div>
        </form>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default SearchForm;
