import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  // show error if student id or password is empty
  const onSubmit = async (data) => {
    // if (data.studentId === "") {
    //   setError("studentId", {
    //     type: "required",
    //     message: "Student ID is required",
    //   });
    // }
    // if (data.password === "") {
    //   setError("password", {
    //     type: "required",
    //     message: "Password is required",
    //   });
    // }
    // if student id and password is not empty, redirect to order page
    if (data.studentId !== "" && data.password !== "") {
      try {
        const res = await axios.post("/api/user/signUp", {
          studentId: parseInt(data.studentId),
          password: data.password,
        });
        console.log(res.data);
        router.push("/order");
      } catch (err) {
        console.log(err);
      }
    }
  };
  // create a form that accept student id and password

  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
      <Head>
        <title>NCCU Order</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-bold">NCCU</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center space-y-4 w-2/3"
      >
        <input
          type="text"
          placeholder="Sutdent ID"
          className="input input-bordered w-full max-w-md"
          {...register("studentId", { required: true })}
        />
        {/* {errors.studentId && (
          <p className="text-red-500">{errors.studentId.message} 3333</p>
        )} */}
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-md"
          {...register("password", { required: true })}
        />
        {/* {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )} */}
        <button className="btn w-full max-w-md" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
