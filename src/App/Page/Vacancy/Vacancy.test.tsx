import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import Vacancy from "./Vacancy";
import { configureStore } from "@reduxjs/toolkit";
import { vacanciesApi } from "../../../api/vacancy-fetch";
import type { VacancyType } from "../../../types";
import { vi } from 'vitest'

const mockVacancies: VacancyType[] = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  name: `Vacancy ${i + 1}`,
  salary: { from: 100000, to: 200000, currency: "RUR", gross: false },
  experience: { id: "between1And3", name: "От 1 года до 3 лет" },
  employer: {
    id: "company_" + (i + 1),
    name: `Компания ${i + 1}`,
    logo_urls: {},
    alternate_url: "https://hh.ru/employer/" + (i + 1),
  },
  schedule: { id: "remote", name: "Можно удалённо" },
  area: { id: "1", name: "Москва" },
  keySkills: [{ name: "JavaScript" }, { name: "TypeScript" }, { name: "React" }],
  alternate_url: "https://hh.ru/vacancy/" + (i + 1),
}));

const mockResponse = {
  items: mockVacancies,
  pages: 5,
  page: 0,
  per_page: 10,
  found: 50,
};

const store = configureStore({
  reducer: {
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesApi.middleware),
});

describe("Vacancy component with RTK Query", () => {
  beforeEach(() => {
    vi.spyOn(vacanciesApi.endpoints.getVacancies, "useQuery").mockImplementation(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (_arg) => ({
        data: mockResponse,
        error: null,
        isLoading: false,
        isFetching: false,
        refetch: vi.fn(),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders 10 vacancies", async () => {
    render(
      <Provider store={store}>
        <MantineProvider>
          <Vacancy />
        </MantineProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByText(/Vacancy/)).toHaveLength(10);
    });
  });

  test("pagination triggers new fetch", async () => {
    const spy = vi.spyOn(vacanciesApi.endpoints.getVacancies, "useQuery");

    render(
      <Provider store={store}>
        <MantineProvider>
          <Vacancy />
        </MantineProvider>
      </Provider>
    );

    await screen.findByText("Vacancy 1");

    const page2Btn = screen.getByRole("button", { name: "2" });
    await userEvent.click(page2Btn);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ page: 1 })
    );
  });
});
