import { FC, ReactNode } from "react";

import styles from "./Message.module.scss";

import { Typography } from "@mui/material";

interface MessageProps {
  children: ReactNode;
}
export const Message: FC<MessageProps> = ({ children }) => {
  return (
    <Typography
      className={styles.message}
      variant="h4"
      component="h2"
      gutterBottom
    >
      {children}
    </Typography>
  );
};
