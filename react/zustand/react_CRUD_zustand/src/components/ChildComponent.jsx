import useUsersStore from "../zustand/usersStore";
import { useEffect } from "react";

function ChildComponent() {
  useEffect(() => {
    useUsersStore.setState(
      () => ({ message: "hello from child component2" })
    );
  });
  return <div className="bg-blue-400 p-2">This is child component</div>;
}
export default ChildComponent;
