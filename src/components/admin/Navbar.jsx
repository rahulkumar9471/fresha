import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const Navbar = () => {
  const { handleLogout, authInfo } = useAuth();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header
      className={`dark:bg-primary bg-secondary w-full z-50 shadow-md dark:border-dark-subtle border-b-[1px] fixed top-0"
      }`}
    >
      <nav className="w-full flex px-[1rem] py-2 gap-x-4">
        <div className="w-[120px] text-center">
          <Link to="/" className="h-14 text-tertiary text-xl">
            Fresha
          </Link>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="">
            <button className="p-2 rounded-[4px] text-tertiary">
              <FaBars size={16} />
            </button>
          </div>
          <div className="relative lg:w-[20rem] xl:w-[30rem]">
            <input
              type="text"
              className="w-full border-2 dark:border-dark-subtle dark:text-dark-subtle  border-light-subtle text-light-subtle p-1 pl-[40px] bg-transparent rounded-[4px]"
              placeholder="Search"
            />
            <span className="absolute left-2 top-[6px]">
              {" "}
              <CiSearch
                className="dark:text-dark-subtle text-light-subtle"
                size={24}
              />
            </span>
          </div>
          <div className="relative mr-4">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                sx={{ bgcolor: "tertiary", width: 32, height: 32 }}
                alt={authInfo.profile.name}
                src="/broken-image.jpg"
              />
            </IconButton>
            {/* </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="profile">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handleLogout}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
