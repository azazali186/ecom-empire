import { Button } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  colorName: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string;
  name: string;
  onClick: Function
}

const CustomButton: React.FC<CustomButtonProps> = ({ colorName, name, onClick }) => {
  return (
    <div>
      <Button variant="outlined" className="font-bold" color={colorName} onClick={onClick}>
        {name}
      </Button>
    </div>
  );
};

export default CustomButton;
