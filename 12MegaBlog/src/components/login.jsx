import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = React.useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data.email, data.password);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl px-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60 ">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mt-8">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button>Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;

{
  /* <div className="w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <div className="flex flex-col items-center mb-6">
                    <Logo />
                    <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Sign in to your account</h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Welcome back — please enter your details</p>
                </div>

                <form onSubmit={handleSubmit(login)} className="flex flex-col space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        {...register('email', { required: true })}
                        aria-label="Email"
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        {...register('password', { required: true })}
                        aria-label="Password"
                    />

                    {error ? (
                        <p className="text-sm text-red-500">{error}</p>
                    ) : null}

                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>

                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                        <Link to="/forgot" className="hover:underline">
                            Forgot password?
                        </Link>
                        <span>
                            New here?{' '}
                            <Link to="/register" className="text-blue-600 hover:underline">
                                Create an account
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div> */
}
