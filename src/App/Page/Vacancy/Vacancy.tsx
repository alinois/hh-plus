import { Group, Pagination } from '@mantine/core';
import ListSearch from './Components/ListSearch/ListSearch';
import Skills from './Components/Skills/Skills';
import Titles from './Components/Titles/Titles';
import { Cities } from './Components/Cities/Cities';
import { useGetVacanciesQuery } from '../../../api/vacancy-fetch';
import { useVacancySearchParams } from '../../../hooks/useVacancySearchParams';
import './Vacancy.scss';

const Vacancy = () => {
  const {
    page, setPage,
    text: searchQuery, setText: setSearchQuery,
    skills, setSkills,
    city, setCity,
  } = useVacancySearchParams();

  const { data, error, isLoading } = useGetVacanciesQuery({
    page,
    text: searchQuery,
    skills,
    city,
  });

  return (
    <Group className="vacancy">
      <ListSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />
      
      <Group className="search-params">
        <Skills skills={skills} setSkills={setSkills} />
        <Cities city={city} setCity={setCity} />
      </Group>

      <Group className="all-titles">
        {isLoading && <div>Подыскиваем вакансии...</div>}
        {error && <div>Ошибка при загрузке вакансий</div>}
        {data?.items.map(v => (
          <Titles key={v.id} vacancy={v} />
        ))}

        <Pagination
          total={data?.pages ?? 0}
          value={page + 1}
          onChange={(p) => setPage(p - 1)}
          color="indigo"
          withEdges
        />
      </Group>
    </Group>
  );
};

export default Vacancy;
