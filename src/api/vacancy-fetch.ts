import type { Vacancy } from "../types";

interface VacanciesResponse {
  items: Vacancy[];
  found: number;
  pages: number;
  per_page: number;
  page: number;
}

interface FetchVacanciesParams {
  page?: number;
  text?: string;
  skills?: string[];
}

export async function fetchVacancies({
  page = 0,
  text = '',
  skills = ['TypeScript', 'React', 'Redux'],
}: FetchVacanciesParams = {}): Promise<VacanciesResponse> {
  const params = new URLSearchParams({
    industry: '7',
    professional_role: '96',
    page: page.toString(),
    per_page: '10',
  });

  if (text) params.set('text', text);

  skills.forEach(skill => params.append('skill_set[]', skill));

  const url = `https://api.hh.ru/vacancies?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "my-app",
    },
  });

  if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
  return response.json();
}


