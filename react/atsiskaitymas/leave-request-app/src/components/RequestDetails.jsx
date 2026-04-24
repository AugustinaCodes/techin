import { useParams } from "react-router";
import { getSingleRequest } from "../services/getRequests";
import { useEffect, useState } from "react";

export default function RequestDetails() {
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  const getRequestDetails = async (id) => {
    try {
      const request = await getSingleRequest(id);
      setRequest(request);
    } catch (err) {
      setError("Failed to load request details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getRequest = async () => await getRequestDetails(id);
    getRequest();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!request) return <p>Request not found.</p>;

  return (
    <section className="mx-auto mt-6 max-w-lg">
      <h1 className="text-xl font-semibold">Request Details</h1>

      <p>ID: {request.id}</p>
      <p>Employee Name: {request.employeeName}</p>
      <p>Department: {request.department}</p>
      <p>Leave Type: {request.leaveType}</p>
      <p>Start Date: {request.startDate}</p>
      <p>End Date: {request.endDate}</p>
      <p>Reason: {request.reason}</p>
      <p>Status: {request.status}</p>
      <p>Created at: {request.createdAt}</p>
    </section>
  );
}
