import React from "react";
import { Button } from "@mui/material";

const ModalButton = ({ children, className, onClick }) => {
  return (
    <Button
      variant="contained"
      className="flex justify-center items-center h-auto font-semibold focus:outline-none rounded-[4px]"
      sx={{
        backgroundColor: "#000000",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#000000",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
