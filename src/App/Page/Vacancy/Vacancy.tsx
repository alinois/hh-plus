import { useEffect, useState } from "react";
import { Group, Pagination } from "@mantine/core";
import ListSearch from "./Components/ListSearch/ListSearch";
import Skills from "./Components/Skills/Skills";
import Titles from "./Components/Titles/Titles";
import { Cities } from "./Components/Cities/Cities";
import { fetchVacancies } from "../../../api/vacancy-fetch";
import type { Vacancy } from "../../../types";
import "./Vacancy.scss";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // фильтры
  const [searchQuery, setSearchQuery] = useState('');
  const [skills, setSkills] = useState(['TypeScript', 'JavaScript', 'React']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchVacancies({ page, text: searchQuery, skills });
        setVacancies(res.items);
        setTotalPages(res.pages);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, searchQuery, skills]);

  return (
    <Group className="vacancy">
      <ListSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />

      <Group className="search-params">
        <Skills skills={skills} setSkills={setSkills} />
        <Cities />
      </Group>

      <Group className="all-titles">
        {vacancies.map((v) => (
          <Titles key={v.id} vacancy={v} />
        ))}

        <Pagination
          total={totalPages}
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
