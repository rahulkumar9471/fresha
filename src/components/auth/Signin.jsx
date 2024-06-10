import React, { useEffect, useState } from "react";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import CustomLink from "../utils/CustomLink";
import CustomButton from "../utils/CustomButton";
import toast from "react-hot-toast";
import { signin } from "../../api/user";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const validateUserInfo = ({ username, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidMobile = /^[6-9]\d{9}$/;

  if (!username.trim()) return { ok: false, error: "Please enter Username !" };
  if (!isValidEmail.test(username) && !isValidMobile.test(username)) {
    return { ok: false, error: "Invalid Username" };
  }

  if (!password.trim()) return { ok: false, error: "Invalid Password" };
  if (password.length < 8)
    return { ok: false, error: "Password must be atleast 8 characters long!" };

  return { ok: true };
};

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, authInfo } = useAuth();
  const { isPending, isLoggedIn } = authInfo;
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { username, password } = userInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ok, error } = validateUserInfo(userInfo);

      if (!ok) return toast.error(error);

      handleLogin(userInfo.username, userInfo.password);

      var response = await signin(userInfo);

      if (response.error) return toast.error(response.error);

      if (response.data) {
        navigate("/", { replace: true });
        if (response.message) return toast.success(response.message);
      }
    } catch (error) {
      console.error("An error occurred While Sign In", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn]);

  return (
    <FormContainer className="h-[80vh]">
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit} className="w-[20rem]">
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
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              className="h-4 w-6 accent-[#000000] rounded-[10px] bg-transparent"
              id="invalidCheck"
            />
            <label htmlFor="invalidCheck" className="text-[#000000]">
              Remember Me
            </label>
          </div>
          <CustomLink to="./recover-account.html">Forgot Password ?</CustomLink>
        </div>
        <div className="mt-4">
          <CustomButton type="submit" className="w-full">
            Sign In
          </CustomButton>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="">Don't have an account ?</p>
          <CustomLink to="/sign-up" className="ml-2">
            Sign Up
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signin;
