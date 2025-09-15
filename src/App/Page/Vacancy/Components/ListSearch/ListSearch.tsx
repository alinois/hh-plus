import { Group, Text, Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import './ListSearch.scss';

interface ListSearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setPage: (page: number) => void;
}

const ListSearch = ({ searchQuery, setSearchQuery, setPage }: ListSearchProps) => {
  const icon = <IconSearch size={16} />;

  const handleSearch = () => {
    setPage(0); // сброс на первую страницу
  };

  return (
    <Group className="listSearch">
      <Group className="listSearch-text">
        <Text className="listSearch-title">Список вакансий</Text>
        <Text className="listSearch-descr">по профессии Frontend-разработчик</Text>
      </Group>

      <Group className="listSearch-search">
        <Input
          className='listSearch-input'
          size="md"
          radius="md"
          leftSectionPointerEvents="none"
          leftSection={icon}
          placeholder="Должность или название компании"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Button
          size="md"
          className='listSearch-button'
          variant="filled"
          color="indigo"
          onClick={handleSearch}
        >
          Найти
        </Button>
      </Group>
    </Group>
  );
};

export default ListSearch;
