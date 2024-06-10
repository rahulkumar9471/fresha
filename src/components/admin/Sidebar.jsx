import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { useAuth } from "../../hooks";

const Sidebar = () => {
  const { handleLogout, authInfo } = useAuth();
  return (
    <aside className="min-h-screen bg-[#272727] border-r border-gray-300">
      <div className="flex flex-col justify-between p-2 h-screen w-[180px] sticky top-0">
        <ul className="mt-14">
          <SideItem to="/" icon={<MdDashboard />} label="Home" />
          <SideItemWithChildren icon={<IoSettingsOutline />} label="Setting">
            <SideItem to="/blog" label="Blog" />
            <SideItem to="/profile" label="Profile" />
          </SideItemWithChildren>
          <SideItem to="/author" icon={<FaRegUser />} label="Author" />
        </ul>
        <div className="flex flex-col items-start p-5">
          {authInfo && authInfo.profile && (
            <span className="font-bold text-white text-xl">
              {authInfo.profile.name}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 text-sm hover:text-white transition space-x-1"
          >
            <FiLogOut />
            <span>LogOut</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const SideItem = ({ to, icon, label }) => {
  const commonClasses =
    " flex items-center text-lg space-x-2 p-2 hover:opacity-80";
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          (isActive ? "text-white" : "text-gray-400") + commonClasses
        }
        to={to}
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

const SideItemWithChildren = ({ icon, label, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const commonClasses =
    " flex items-center text-lg space-x-2 p-2 hover:opacity-80";

  return (
    <>
      <li>
        <button className={commonClasses} onClick={toggleOpen}>
          {icon}
          <span>{label}</span>
        </button>
      </li>
      {isOpen && <ul>{children}</ul>}
    </>
  );
};

export default Sidebar
