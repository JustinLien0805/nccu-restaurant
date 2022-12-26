import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // show error if student id or password is empty
  const onSubmit = async (data) => {
    // if student id and password is not empty, redirect to order page
    setLoading(true);
    if (data.studentId !== "" && data.password !== "") {
      try {
        // check user exist or not, if not create a new user and redirect to login page
        const res = await axios.post("/api/user/signUp", {
          studentId: parseInt(data.studentId),
          password: data.password,
        });
        // after create a new user, redirect to login page
        if (!res.data.error) {
          router.push("/");
          setLoading(false);
        } else {
          setError(res.data.error);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center items-center space-y-4 relative">
        {loading && <Loader />}
        <h1 className="text-5xl font-bold">Sign Up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center space-y-6 w-2/3"
        >
          <input
            type="text"
            placeholder="Sutdent ID"
            className="input input-bordered w-full max-w-md"
            {...register("studentId", { required: true })}
          />
          {errors.studentId && (
            <p className="text-red-500 w-full text-right">
              this field is required
            </p>
          )}
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered w-full max-w-md"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 w-full text-right">
              this field is required
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col w-full border-opacity-50 max-w-md items-center justify-center">
            <button className="btn w-full max-w-md" type="submit">
              Sign Up
            </button>
            <div className="divider">OR</div>
            <label
              className="btn w-full max-w-md"
              onClick={() => {
                router.push("/");
              }}
            >
              Sign In
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
