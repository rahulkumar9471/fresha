import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/pages/Dashboard";
import Sidebar from "../components/admin/Sidebar";
import Profile from "../components/admin/pages/Profile";

const AdminNavigator = () => {
  return (
    <div>
      <div className="">
        <div className="flex w-full">
          <Navbar />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigator;
