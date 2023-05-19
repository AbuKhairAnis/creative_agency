import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/signup");
  };

  const menuItems = (
    <>
      <li>
        <Link className=" text-2xl" to="/">
          Home
        </Link>
      </li>
      <li>
        {!user && (
          <Link className=" text-2xl" to="/login">
            Login
          </Link>
        )}
        {!user && (
          <Link className=" text-2xl" to="/signup">
            Sign Up
          </Link>
        )}
      </li>
      <li>
        {user && (
          <div>
            <span>{user.username}</span>
            <button onClick={() => handleClick()}>Log out</button>
          </div>
        )}
      </li>
    </>
  );

  return (
    <div style={{ background: "#FBD062" }}>
      <div className="w-[80%] m-auto z-10 ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {menuItems}
              </ul>
            </div>
            <img src={logo} width={150} alt="" />
          </div>
          <div className="navbar-end hidden lg:flex pr-3">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
