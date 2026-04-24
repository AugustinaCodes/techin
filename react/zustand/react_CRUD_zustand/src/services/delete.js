import axios from "axios";
import { getOne } from "./get";

const API_URL = import.meta.env.VITE_API_URL;

const deleData = async (id) => {
  const user = await getOne(id);

  const confirmed = window.confirm(
    `Are you sure want to delete user: ${user.email}`,
  );
  if (!confirmed) return;

  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default deleData;
