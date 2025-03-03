import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    // Navber
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-5">
        {/* Website Name */}
        <h1 className="font-bold text-2xl font-montserrat">Next Zen</h1>

        {/* Navber link */}
        <div>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/allCampaign"}>All Campaign</NavLink>
          <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
          <NavLink to={"/myCampaign"}>My Campaign</NavLink>
          <NavLink to={"/myDonations"}>My Donations</NavLink>
        </div>
      </div>

      {/* Socal login */}
      <div>
        <button>Sing in</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navber;
