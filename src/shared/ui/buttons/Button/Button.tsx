import { Button } from "@mui/material";

export const Button = ({
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
