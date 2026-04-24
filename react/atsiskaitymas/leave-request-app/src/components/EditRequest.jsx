import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import updateRequest from "../services/updateRequest";
import { getSingleRequest } from "../services/getRequests";

export default function EditRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadError, setLoadError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isLoadingRequest, setIsLoadingRequest] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      employeeName: "",
      department: "",
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
      status: "Pending",
    },
  });

  const startDateValue = watch("startDate");

  useEffect(() => {
    const fetchRequest = async () => {
      setLoadError("");
      try {
        const request = await getSingleRequest(id);
        reset({
          employeeName: request.employeeName,
          department: request.department,
          leaveType: request.leaveType,
          startDate: request.startDate,
          endDate: request.endDate,
          reason: request.reason,
          status: request.status,
        });
      } catch (error) {
        setLoadError("Failed to load request");
      } finally {
        setIsLoadingRequest(false);
      }
    };

    fetchRequest();
  }, [id, reset]);

  const onSubmit = async (formData) => {
    setSubmitError("");
    try {
      await updateRequest(id, formData);
      navigate(`/requests/${id}`);
    } catch (error) {
      setSubmitError("Failed to update request");
    }
  };

  if (isLoadingRequest) return <p>Loading...</p>;
  if (loadError) return <p>{loadError}</p>;

  return (
    <section className="mx-auto mt-6 max-w-lg">
      <h1 className="text-xl font-semibold">Edit request</h1>

      {submitError && <p className="mt-2 bg-red-200 p-2">{submitError}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3" noValidate>
        <div>
          <label htmlFor="employeeName">Employee Name</label>
          <input
            id="employeeName"
            type="text"
            className="block w-full border p-2"
            {...register("employeeName", { required: "Employee name is required" })}
          />
          <p className="text-red-600">{errors.employeeName?.message}</p>
        </div>

        <div>
          <label htmlFor="department">Department</label>
          <input
            id="department"
            type="text"
            className="block w-full border p-2"
            {...register("department", { required: "Department is required" })}
          />
          <p className="text-red-600">{errors.department?.message}</p>
        </div>

        <div>
          <label htmlFor="leaveType">Leave Type</label>
          <select
            id="leaveType"
            className="block w-full border p-2"
            {...register("leaveType", { required: "Leave type is required" })}
          >
            <option value="">-- Select leave type --</option>
            <option value="Vacation">Vacation</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Remote Work">Remote Work</option>
            <option value="Unpaid Leave">Unpaid Leave</option>
          </select>
          <p className="text-red-600">{errors.leaveType?.message}</p>
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            className="block w-full border p-2"
            {...register("startDate", { required: "Start date is required" })}
          />
          <p className="text-red-600">{errors.startDate?.message}</p>
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            className="block w-full border p-2"
            {...register("endDate", {
              required: "End date is required",
              validate: (value) =>
                !startDateValue || value >= startDateValue || "End date must be after start date",
            })}
          />
          <p className="text-red-600">{errors.endDate?.message}</p>
        </div>

        <div>
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            className="block w-full border p-2"
            {...register("reason", {
              required: "Reason is required",
              minLength: {
                value: 10,
                message: "Reason must be at least 10 characters",
              },
            })}
          />
          <p className="text-red-600">{errors.reason?.message}</p>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            className="block w-full border p-2"
            {...register("status", { required: "Status is required" })}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <p className="text-red-600">{errors.status?.message}</p>
        </div>

        <button type="submit" className="bg-amber-500 px-4 py-2" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </section>
  );
}
