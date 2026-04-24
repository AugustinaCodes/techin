import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import postRequest from "../services/postRequest";

export default function CreateNewRequest() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
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

  const onSubmit = async (formData) => {
    setSubmitError("");

    try {
      await postRequest({
        ...formData,
        createdAt: new Date().toISOString().slice(0, 10),
      });
      navigate("/requests");
    } catch (error) {
      setSubmitError("Failed to create request");
    }
  };

  return (
    <section className="mx-auto mt-6 max-w-lg">
      <h1 className="text-xl font-semibold">Create a new request</h1>

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

        <button
          type="submit"
          className="bg-amber-500 px-4 py-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Create Request"}
        </button>
      </form>
    </section>
  );
}
