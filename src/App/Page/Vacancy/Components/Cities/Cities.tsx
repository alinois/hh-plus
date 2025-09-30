import './Cities.scss';
import { Select, Card } from '@mantine/core'; 
import { IconMapPin } from '@tabler/icons-react';

interface CitiesProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export const Cities = ({ city, setCity }: CitiesProps) => {
  const icon = <IconMapPin size={16} />;

  return (
    <Card className="skills" radius="md">
      <Select
        placeholder="Все города"
        data={['Все города', 'Москва', 'Санкт-Петербург']}
        value={city}
        onChange={(val) => setCity(val || "Все города")}
        leftSectionPointerEvents="none"
        leftSection={icon}
      />        
    </Card>
  );
};
