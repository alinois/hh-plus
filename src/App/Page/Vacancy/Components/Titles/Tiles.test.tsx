import { render, screen } from "@testing-library/react";
import Titles from "./Titles";
import { MantineProvider } from '@mantine/core';
import type { VacancyType } from "../../../../../types";

const mockVacancy: VacancyType = {
  id: "1",
  name: "React Frontend-разработчик",
  salary: {
    from: 100000,
    to: 160000,
    currency: "RUR",
  },
  experience: {
    id: "experience",
    name: "От 1 года до 3 лет",
  },
  employer: {
    id: "employer",
    name: "Студия Oxem",
  },
  schedule: {
    id: "remote",
    name: "Можно удалённо",
  },
  area: {
    id: "area",
    name: "Москва",
  },
  alternate_url: "https://hh.ru/vacancy/123",
};

test("fetch working correctly and have properties", async () => {
  render(
    <MantineProvider>
      <Titles vacancy={mockVacancy}/>
    </MantineProvider>
  );

  expect(await screen.findByText('React Frontend-разработчик')).toBeInTheDocument();
  expect(await screen.findByText('100000 - 160000 RUR')).toBeInTheDocument();
  expect(await screen.findByText('От 1 года до 3 лет')).toBeInTheDocument();
  expect(await screen.findByText('Студия Oxem')).toBeInTheDocument();
  expect(await screen.findByText('Можно удалённо')).toBeInTheDocument();
  expect(await screen.findByText('Москва')).toBeInTheDocument();
});
