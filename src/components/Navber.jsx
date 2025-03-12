import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navber = () => {
  const { signOutUser, user } = useContext(MainContextProviderContext);
  const links = (
    <>
      <NavLink className="hover:text-secondary transition duration-300" to={"/"}>Home</NavLink>
      <NavLink className="hover:text-secondary transition duration-300" to={"/allCampaign"}>All Campaign</NavLink>
      <NavLink className="hover:text-secondary transition duration-300" to={"/addCampaign"}>Add New Campaign</NavLink>
      <NavLink className="hover:text-secondary transition duration-300" to={"/myCampaign"}>My Campaign</NavLink>
      <NavLink className="hover:text-secondary transition duration-300" to={"/myDonations"}>My Donations</NavLink>
    </>
  );

  return (
    <div className="bg-base-200">
      <div className="navbar font-ibm-plex container mx-auto">
        {/* Logo Section */}
        <div className="navbar-start">
          <a className="text-3xl font-bold text-primary drop-shadow-lg">Next Zen</a>
        </div>

        {/* Navbar Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-base font-medium text-base-content">
            {links}
          </ul>
        </div>

        {/* User Section */}
        <div className="navbar-end">
          <Tooltip className="z-50" anchorSelect=".my-anchor-element" place="top">
            {user ? user.displayName : "Name Not Found"}
          </Tooltip>

          {user ? (
            <>
              <div className="mr-3 w-10 h-10 border-2 border-secondary rounded-full overflow-hidden">
                {user ? (
                  <img className="my-anchor-element w-full h-full object-cover" src={user?.photoURL} alt="User" />
                ) : (
                  <img className="my-anchor-element w-full h-full object-cover" src="https://i.ibb.co.com/qLWkbpCH/photourl.png" alt="Default" />
                )}
              </div>
              <Link to={"/"} className="hidden lg:btn lg:btn-outline mr-2 text-base-content border-base-content hover:bg-base-content hover:text-base-200 font-medium" onClick={signOutUser}>
                SignOut
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="hidden lg:btn lg:btn-outline mr-2 text-base-content border-base-content hover:bg-base-content hover:text-base-200 font-medium">
                Log in
              </Link>
              <Link to={"/register"} className="hidden lg:btn lg:btn-outline text-base-content border-base-content hover:bg-base-content hover:text-base-200 font-medium">
                Register
              </Link>
            </>
          )}

          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu right-0 menu-sm w-40 dropdown-content bg-base-300 rounded-box z-10 mt-2 p-2 shadow text-base-content">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;