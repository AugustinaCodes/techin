import axios from "axios";
import { getSingleRequest } from "./getRequests";

const API_URL = import.meta.env.VITE_API_URL;

const deleteRequest = async (id) => {
  const request = await getSingleRequest(id);

  const confirmed = window.confirm(
    `Are you sure you want to delete request: ${request.id}`,
  );
  if (!confirmed) return;

  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default deleteRequest;
