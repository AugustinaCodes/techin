import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAllRequests } from "../services/getRequests";

export default function RequestsList() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load requests");
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (requests.length === 0) return <p>No requests found.</p>;

  return (
    <section className="mx-auto mt-6 max-w-lg">
      <h1 className="text-xl font-semibold">Requests List</h1>

      <table className="mt-4 w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="border p-2">Request ID</th>
            <th className="border p-2">Employee name</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td className="border p-2">{request.id}</td>
              <td className="border p-2">{request.employeeName}</td>
              <td className="border p-2">
                <Link
                  to={`/requests/${request.id}`}
                  className="mr-2 bg-amber-500 p-1"
                >
                  View
                </Link>
                <Link
                  to={`/requests/${request.id}/edit`}
                  className="bg-amber-500 p-1"
                >
                  Edit
                </Link>
                <button className="bg-red-500 p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
