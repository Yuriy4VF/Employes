import { FC, Suspense, ReactNode } from "react";
import { Typography } from "@mui/material";

interface PageSuspenseProps {
  children: ReactNode;
}

export const PageSuspense: FC<PageSuspenseProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Typography
          variant="h4"
          component="h2"
          style={{ color: "#607d8b" }}
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
