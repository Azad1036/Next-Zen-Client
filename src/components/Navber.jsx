import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MainContextProviderContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navber = () => {
  const { signOutUser, user } = useContext(MainContextProviderContext);
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allCampaign"}>All Campaign</NavLink>
      <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
      <NavLink to={"/myCampaign"}>My Campaign</NavLink>
      <NavLink to={"/myDonations"}>My Donations</NavLink>
    </>
  );
  return (
    // </div>
    <div className="bg-[#F1F1F0]">
      <div className="navbar font-ibm-plex container mx-auto">
        {/* 3 */}
        <div className="navbar-start">
          <a className="text-2xl font-bold text-[#185C65]">Next Zen</a>
        </div>

        {/* 2 */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-base font-medium text-[#185C65]">
            {links}
          </ul>
        </div>

        {/* 3 */}
        <div className="navbar-end">
          <Tooltip
            className="z-50"
            anchorSelect=".my-anchor-element"
            place="top"
          >
            {user?.displayName ? user.displayName : "Name Not Found"}
          </Tooltip>
          {user ? (
            <>
              <div className="mr-3 w-9 h-9 border rounded-full">
                {user?.photoURL ? (
                  <img
                    className=" my-anchor-element w-full h-full object-cover"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <img
                    className=" my-anchor-element w-full h-full object-cover"
                    src="https://i.ibb.co.com/qLWkbpCH/photourl.png"
                    alt=""
                  />
                )}
              </div>
              <Link
                to={"/"}
                className="hidden lg:btn lg:btn-outline mr-2 text-[#185C65] font-medium"
                onClick={signOutUser}
              >
                SignOut
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="hidden lg:btn lg:btn-outline mr-2 text-[#185C65] font-medium"
              >
                Log in
              </Link>
              <Link
                to={"/register"}
                className="hidden lg:btn lg:btn-outline text-[#185C65] font-medium"
              >
                Register
              </Link>
            </>
          )}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu right-0 menu-sm  w-40 dropdown-content bg-base-100 rounded-box z-1 mt-2 p-2 shadow text-[#185C65]"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
