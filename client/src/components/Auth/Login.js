import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const { username, password, confirmPassword } = formData;
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handelChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handlleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        confirmPassword,
      }),
    });
    const data = await response.json();

    if (data.status === "error") {
      setError(data.error);
    } else {
      dispatch({ type: "LOGIN", payload: data });
      navigate("/");
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <Link to={"/"}>
            <img width={120} src={logo} alt="" />
          </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handlleSubmit}>
            <div className="my-4">
              <label
                htmlFor="username"
                className="block text-xl font-medium undefined"
              >
                Enter Your Userame
              </label>
              <div className="flex flex-col items-start">
                <input
                  value={username}
                  onChange={handelChange}
                  type="text"
                  name="username"
                  id="username"
                  className="block border pl-4  w-full mt-4 h-12 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="block text-xl font-medium undefined"
              >
                Enter Your Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handelChange}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  className="block border pl-4 w-full mt-4 h-12 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="confirmPassword"
                className="block text-xl font-medium undefined"
              >
                Confirm Your Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  onChange={handelChange}
                  value={confirmPassword}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="block border pl-4 w-full mt-4 h-12 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="submit"
                value="Login"
                className="w-full px-4 py-4 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              />
            </div>
            {error && <span>{error}</span>}
          </form>
          <div className="mt-4 text-grey-600">
            Don't Have An Account?{" "}
            <span>
              <Link to={"/singup"} className="text-purple-600 hover:underline">
                SignUp
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
