import { FC, Suspense, ReactNode } from "react";

interface PageSuspenseProps {
  children: ReactNode;
}

export const PageSuspense: FC<PageSuspenseProps> = ({ children }) => {
  return (
    <Suspense fallback={<h1>Подождите, идет загрузка...</h1>}>
      {children}
    </Suspense>
  );
};
