import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <section>
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold">Login</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 character or longer",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* {setError} */}

                <input className="btn w-full" type="submit" value="Login" />
              </form>

              <p>
                <small>
                  Setup Project{" "}
                  <Link
                    to="/singUp"
                    className="text-primary ml-0 md:ml-32 lg:ml-32"
                  >
                    Create an account
                  </Link>
                </small>
              </p>

              <div className="divider">OR</div>
              <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;