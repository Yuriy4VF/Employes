import "@testing-library/jest-dom";
import React, { Suspense, lazy } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { PageSuspense } from "./PageSuspense";

const MockChildComponent = lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) => {
      setTimeout(
        () => resolve({ default: () => <div>Контент загружен</div> }),
        100
      );
    })
);

describe("PageSuspense", () => {
  test('отображает текст "Загрузка..." во время ожидания', () => {
    render(
      <PageSuspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MockChildComponent />
        </Suspense>
      </PageSuspense>
    );

    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
  });

  test("отображает детей после загрузки", async () => {
    render(
      <PageSuspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MockChildComponent />
        </Suspense>
      </PageSuspense>
    );

    await waitFor(() => {
      const loadedText = screen.getByText(/Контент загружен/i);
      expect(loadedText).toBeInTheDocument();
    });
  });
});
