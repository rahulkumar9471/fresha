import React, { useEffect, useRef, useState } from "react";
import FormContainer from "../form/FormContainer";
import CustomButton from "../utils/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyUserEmail } from "../../api/user";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;
  for (let val of otp) {
    valid = !isNaN(parseInt(val));
    if (!valid) break;
  }
  return valid;
};

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState(0);

  const inputRef = useRef();

  const { state } = useLocation();

  const user = state?.id;

  const navigate = useNavigate();

  const focusNextInputField = (index) => {
    setactiveOtpIndex(index + 1);
  };

  const focusPreInputField = (index) => {
    let nextIndex;
    const deff = index - 1;
    nextIndex = deff !== 0 ? deff : 0;
    setactiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPreInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  };

  const handleKeyDown = (key, index) => {
    if (key === "Backspace") {
      focusPreInputField(index);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    if (!user) navigate("/not-found"); 
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if(!isValidOTP(otp)) {
        return toast.error("Invalid OTP");
      }

      const { error, message, user:userResponse } = await verifyUserEmail({
        otp: otp.join(""),
        userId: user,
      })
      
      if(error) return toast.error(error);

      toast.success(message);

    } catch (error) {
      console.error("An error occurred while OTP submition:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  }

  return (
    <FormContainer className="h-[60vh]">
      <h2 className="text-center mb-1 text-xl text-primary font-semibold">
        Please Enter the OTP to verify your accout
      </h2>
      <p className="text-center mb-4 text-primary">
        OTP has been sent to your email
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center space-x-4 mb-6">
          {otp.map((_, index) => {
            return (
              <input
                ref={activeOtpIndex === index ? inputRef : null}
                type="number"
                value={otp[index] || ""}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                key={index}
                className="w-12 h-12 text-primary  border-2 rounded bg-transparent  text-center font-semibold text-xl spin-button-none"
              />
            );
          })}
        </div>
        <CustomButton type="submit" className="w-full">Verify Account</CustomButton>
        <div className="mt-4 text-center">
          <p className="text-primary font-semibold cursor-pointer transform transition-transform duration-300 hover:scale-110">
            Resend OTP
          </p>
        </div>
      </form>
    </FormContainer>
  );
};

export default EmailVerification;
