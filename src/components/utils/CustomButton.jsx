import { Button } from "@mui/material";
import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

const CustomButton = ({ type, children, busy, className }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#000000",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#000000",
        },
      }}
      type={type}
      className={"flex justify-center items-center h-10 font-semibold focus:outline-none rounded-[4px] " + className}
    >
      {busy ? <LiaSpinnerSolid size={28} className="animate-spin" /> : children}
    </Button>
  );
};

export default CustomButton;
