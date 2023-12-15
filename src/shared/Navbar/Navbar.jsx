import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user, loading, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={"/myBookings"}>My Bookings</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}

      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-error mr-5">Appointment</a>
        {user && !loading && (
          <>
            <a className="btn" onClick={handleLogOut}>
              Logout
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
