import './Cities.scss';
import { Select, Card } from '@mantine/core'; 
import { IconMapPin } from '@tabler/icons-react';

export const Cities = () => {
    const icon = <IconMapPin size={16} />;
    return (
    <>
    <Card className="skills" radius="md">
        <Select
            placeholder="Все города"
            data={['Все города', 'Москва', 'Санкт-Питербург']}
            leftSectionPointerEvents="none"
            leftSection={icon}
        />        
    </Card>
    </>
)}