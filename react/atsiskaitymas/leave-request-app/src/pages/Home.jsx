import { useEffect, useMemo, useState } from "react";
import { getAllRequests } from "../services/getRequests";

export default function Home() {
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

  const statusCounts = useMemo(() => {
    return requests.reduce(
      (accumulator, request) => {
        if (request.status === "Pending") accumulator.Pending += 1;
        if (request.status === "Approved") accumulator.Approved += 1;
        if (request.status === "Rejected") accumulator.Rejected += 1;
        return accumulator;
      },
      { Pending: 0, Approved: 0, Rejected: 0 },
    );
  }, [requests]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="mx-auto mt-6 max-w-lg">
      <h1 className="text-xl font-semibold">Home</h1>

      <div className="mt-4 rounded border p-4 text-center">
        <p>Total Requests</p>
        <p className="text-2xl font-bold">{requests.length}</p>
      </div>

      <table className="mt-4 w-full border-collapse text-center">
        <thead>
          <tr>
            <th className="border p-2">Pending</th>
            <th className="border p-2">Approved</th>
            <th className="border p-2">Rejected</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{statusCounts.Pending}</td>
            <td className="border p-2">{statusCounts.Approved}</td>
            <td className="border p-2">{statusCounts.Rejected}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
