import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import PlanList from "./PlanList";

vi.mock("@/hooks/usePlans", () => ({
  usePlans: () => ({
    data: {
      list: [
        {
          name: "Plan Básico",
          age: 30,
          price: 100,
          description: [],
        },
      ],
    },
    isLoading: false,
    error: null,
  }),
}));

vi.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));

vi.mock("@/components/plan/PlanCard/PlanCard", () => ({
  default: ({ plan }) => <div>{plan.name}</div>,
}));

describe("PlanList", () => {
  test("renderiza un plan", () => {
    render(<PlanList userAge={20} quotationSelected="Para mí" />);
    expect(screen.getByText("Plan Básico")).toBeInTheDocument();
  });
});
