import { Button } from "@mui/material";

import { FC } from "react";
import { ButtonProps } from "@mui/material";
interface SimpleButtonProps extends ButtonProps {
  controlWidth?: boolean;
}

export const SimpleButton: FC<SimpleButtonProps> = ({
  type = "button",
  variant = "contained",
  color = "primary",
  fullWidth = false,
  onClick,
  children,
  controlWidth = false,
  ...props
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      fullWidth={controlWidth ? fullWidth : false}
      onClick={onClick}
      style={!controlWidth ? { width: "auto" } : {}}
      {...props}
    >
      {children}
    </Button>
  );
};
