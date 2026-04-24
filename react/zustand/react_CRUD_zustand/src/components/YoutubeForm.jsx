import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { checkNotAdmin } from "../validation/validation";
import postData from "../services/post.js";
import { useNavigate } from "react-router";
import useUsersStore from "../zustand/usersStore.js";

function YoutubeForm() {
  const addNewUser = useUsersStore((state) => state.addNewUser);

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },

    mode: "onBlur", //validate on blur initially
    reValidateMode: "onChange", //revalidate on every change after blur
  });

  // const { username, email } = watch();

  const submitHandler = async (formData) => {
    //update user in json-server
    const postedUser = await postData(formData);

    if (postedUser) {
      //add new user to zustand store
      addNewUser(postedUser);
      navigate("/");
    }
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            className="border"
            {...register("username", {
              required: "User name is required",
              maxLength: { value: 10, message: "User name is too long" },
            })}
          />
          <div className="error">{errors.username?.message}</div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            className="border"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              validate: {
                notAdmin: checkNotAdmin,
                notBlacklisted: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email not allowed"
                  );
                },
              },
            })}
          />
          <div className="error">{errors.email?.message}</div>
        </div>
        <div>
          <label>
            Favorite Channel
            <br />
            <select {...register("channel")} className="border">
              <option value="">-- Select a channel --</option>
              <option value="Code with Ania Kubow">Code with Ania Kubow</option>
              <option value="Kevin Powell">Kevin Powell</option>
              <option value="Net Ninja">Net Ninja</option>
            </select>
          </label>
          <div className="error">{errors.channel?.message}</div>
        </div>
        <div>
          <div>Choose your favorite color:</div>
          <label>
            <input type="radio" value="red" {...register("color")} />
            Red
          </label>
          <label>
            <input type="radio" value="green" {...register("color")} />
            Green
          </label>
          <label>
            <input type="radio" value="blue" {...register("color")} />
            Blue
          </label>
        </div>
        <div>
          <div>Select your hobbies:</div>
          <label>
            <input
              type="checkbox"
              value="Reading"
              {...register("hobbies", {
                validate: (value) =>
                  value.length > 0 || "Please select at least one value",
              })}
            />
            Reading
          </label>
          <label>
            <input type="checkbox" value="Traveling" {...register("hobbies")} />
            Traveling
          </label>
          <label>
            <input type="checkbox" value="Cooking" {...register("hobbies")} />
            Cooking
          </label>
        </div>
        {/* <div>
          <h1>Form data</h1>
          {username && <p>Username: {username}</p>}
          {email && <p>Email: {email}</p>}
        </div> */}
        {/* <div>
          <label>
            Password:
            <input
              className="border"
              type="password"
              {...register("password", { required: "Password is required" })}
            />
          </label>
          <br />
          <label>
            Confirm password:
            <input
              className="border"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) => {
                  return (
                    value === getValues("password") || "Paswwords do not match"
                  );
                },
              })}
            />
          </label>
          <div className="error">{errors.confirmPassword?.message}</div>
        </div> */}
        <input type="submit" value="Submit" className="bg-emerald-400 p-2" />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}

export default YoutubeForm;
