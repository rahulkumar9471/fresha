import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormContainer from "../form/FormContainer";
import Title from "../form/Title";
import CustomLink from "../utils/CustomLink";
import FormInput from "../form/FormInput";
import toast from "react-hot-toast";
import { signup } from "../../api/user"; 
import { useNavigate } from "react-router-dom";
import SubmitButton from "../utils/SubmitButton";

const validateUserInfo = ({ name, email, mobile, password }) => {
  const isValidName = /^[a-z A-Z]+$/;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidMobile = /^[6-9]\d{9}$/;

  if (!name.trim()) return { ok: false, error: "Name is Missing" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid name !" };

  if (!email.trim()) return { ok: false, error: "Email is Missing" };
  if (!isValidEmail.test(email))
    return { ok: false, error: "Invalid Email Id !" };

  if (!mobile.trim()) return { ok: false, error: "Mobile No. is Missing!" };
  if (!isValidMobile.test(mobile))
    return { ok: false, error: "Invalid Mobile No.!" };

  if (!password.trim()) return { ok: false, error: "Invalid Password" };
  if (password.length < 8)
    return { ok: false, error: "Password must be atleast 8 characters long!" };

  return { ok: true };
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const { name, email, mobile, password } = userInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { ok, error } = validateUserInfo(userInfo);

      if (!ok) return toast.error(error);

      var response = await signup(userInfo);

      if (response.error) return toast.error(response.error);

      navigate("/verification", {
        state: response.user,
        replace: true,
      });
    } catch (error) {
      console.error("An error occurred While Sign Up", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <FormContainer className="h-[100vh]">
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit} className="w-[20rem]">
        <FormInput
          lable="Name"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <FormInput
          lable="Email Id"
          placeholder="Email Id"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          lable="Mobile No."
          placeholder="Mobile No."
          name="mobile"
          value={mobile}
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
          <SubmitButton type="submit" className="w-full">
            Sign Up
          </SubmitButton>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="">Do you have an account ?</p>
          <CustomLink to="/sign-in" className="ml-2">
            Sign In
          </CustomLink>
        </div>
      </form>
    </FormContainer>
  );
};

export default Signup;
