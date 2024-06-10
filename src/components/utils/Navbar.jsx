import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import {
  FaHome,
  FaCaretDown,
  FaSearch,
  FaRegUser,
  FaBars,
  FaShoppingBag,
} from "react-icons/fa";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useAuth } from "../../hooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const Navbar = () => {
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn, profile } = authInfo;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <header className="bg-tertiary w-full z-50 shadow-lg border-b-[1px]">
        <div className="">
          <div className="bg-primary text-tertiary flex justify-between items-center px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-2">
            <div className="flex justify-between items-center gap-x-4">
              <div className="flex justify-between items-center gap-x-1">
                <CiLocationOn className="font-semibold" />
                <p className="">Location</p> <span>Bengaluru</span>
                <FaCaretDown />
              </div>
            </div>
            <div className="flex justify-between items-center gap-x-1">
              <Link to="" className="flex items-center gap-x-2">
                <FaHome />
                <p>Become Merchant</p>
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex w-full justify-between px-[1rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-4 items-center">
          <div>
            <Link to="/">
              <h1 className="text-2xl font-semibold">Fresha</h1>
            </Link>
          </div>
          <div className="hidden sm:hidden md:hidden lg:block xl:block">
            <ul className="flex gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 font-semibold items-center">
              <li className="text-l">
                <Link to="/" className="hover:border-b-2 border-primary text-l">
                  Home
                </Link>
              </li>
              <li className="text-l">
                <Link to="/" className="hover:border-b-2 border-primary text-l">
                  Deal
                </Link>
              </li>
              <li className="text-l">
                <Link to="/" className="hover:border-b-2 border-primary text-l">
                  Blog
                </Link>
              </li>
              <li className="text-l">
                <Link to="/" className="hover:border-b-2 border-primary text-l">
                  About Us
                </Link>
              </li>
              <li className="text-l">
                <Link to="/" className="hover:border-b-2 border-primary text-l">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 font-semibold items-center">
              <li className="">
                {!isLoggedIn ? (
                  <Link to="/sign-in" className="">
                    <FaRegUser size={20} />
                  </Link>
                ) : (
                  <>
                    {/* <Tooltip title="Open settings"> */}
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          sx={{ bgcolor: "black", width: 32, height: 32 }}
                          alt={profile.name}
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
                          LogOut
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </>
                )}
              </li>

              <li className="hidden sm:hidden md:block lg:block mt-2">
                <button className="focus:outline-none" onClick={handleOpen}>
                  <FaSearch size={20} />
                </button>
              </li>
              <li className="hidden sm:hidden md:block lg:block mt-2 relative">
                <button className="">
                  <FaShoppingBag size={20} />
                </button>
                <span className="absolute bg-primary text-tertiary w-5 h-5 flex justify-center items-center top-[-10px] left-3 text-[12px] rounded-full">
                  9
                </span>
              </li>
              <li className="block sm:block md:block lg:hidden xl:hidden">
                <button className="py-[10px] px-3 rounded-[4px] border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]">
                  <FaBars />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Modals open={open} setOpen={setOpen} handleClose={handleClose}></Modals>
    </>
  );
};

const Modals = ({ open, handleClose, setOpen }) => {
  const handleKeyDown = ({ key }) => {
    const keys = ["Escape"];
    if (!keys.includes(key)) return;

    if (key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="focus:outline-none" sx={style}>
        <div>
          <div className="flex justify-center items-center gap-x-2">
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent text-primary w-full px-4 py-2 border-none rounded focus:outline-none"
              onKeyDown={handleKeyDown}
            />
            <span className="border-2 py-1 px-2 rounded bg-secondary">Esc</span>
          </div>
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default Navbar;
