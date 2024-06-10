import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/admin/Navbar";
import Dashboard from "../components/admin/Dashboard";
import Sidebar from "../components/admin/Sidebar";

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
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigator;
