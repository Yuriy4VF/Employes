import { FC, Suspense, ReactNode } from "react";

import styles from "./PageSuspense.module.scss";

import { Typography } from "@mui/material";

interface PageSuspenseProps {
  children: ReactNode;
}

export const PageSuspense: FC<PageSuspenseProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Typography
          className={styles.suspense}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Загрузка...
        </Typography>
      }
    >
      {children}
    </Suspense>
  );
};
