import { FC } from "react";
import { ButtonProps } from "@mui/material";

import styles from "./SimpleButton.module.scss";

import { Button } from "@mui/material";

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
  const buttonClass = controlWidth ? styles.fullWidth : styles.button;

  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      className={buttonClass}
      onClick={onClick}
      fullWidth={controlWidth ? fullWidth : false}
      {...props}
    >
      {children}
    </Button>
  );
};
