import React, { useState } from "react";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomLink from "../utils/CustomLink";
import CustomButton from "../utils/CustomButton";
import toast from "react-hot-toast";
import FormSelect from "../form/FormSelect";
import { adminSignIn } from "../../api/admin";
import { useNavigate } from "react-router-dom";

const validateAdminInfo = ({ role, username, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidMobile = /^[6-9]\d{9}$/;

  if (!role) return { ok: false, error: "Select your role !" };

  if (!username.trim()) return { ok: false, error: "Please enter Username !" };
  if (!isValidEmail.test(username) && !isValidMobile.test(username)) {
    return { ok: false, error: "Invalid Username !" };
  }

  if (!password.trim()) return { ok: false, error: "Invalid Password !" };
  if (password.length < 8)
    return { ok: false, error: "Password must be atleast 8 characters long !" };

  return { ok: true };
};

const AdminSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [adminInfo, setAdminInfo] = useState({
    role: "",
    username: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setAdminInfo({ ...adminInfo, [name]: value });
  };

  const { role, username, password } = adminInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ok, error } = validateAdminInfo(adminInfo);
      if (!ok) return toast.error(error);

      const response = await adminSignIn(adminInfo);

      if (response.error) return toast.error(response.error);

      if (response.message) {
        navigate("/auth/dashboard", { replace: true });
        if (response.message) return toast.success(response.message);
      }
    } catch (error) {
      console.error("An error occurred While Sign In", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <FormContainer className="h-[80vh]">
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit} className="w-[20rem]">
        <FormSelect
          label="Role"
          name="role"
          defaultValue=""
          options={[
            {
              label: "Select a Role",
              value: "",
            },
            { label: "Admin", value: "admin" },
            { label: "Manager", value: "manager" },
          ]}
          value={role}
          onChange={handleChange}
        />

        <FormInput
          lable="Email id/Mobile no."
          placeholder="Email id/Mobile no."
          name="username"
          value={username}
          onChange={handleChange}
        />
        <div className="relative">
          <FormInput
            lable="Password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
          />
          <span
            className="absolute right-3 top-[44px] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye fontSize={24} className="" />
            ) : (
              <FaEyeSlash fontSize={24} className="" />
            )}
          </span>
        </div>

        <div className="mt-4">
          <CustomButton type="submit" className="w-full">
            Sign In
          </CustomButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default AdminSignIn;
