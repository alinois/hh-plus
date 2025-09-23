import "./Titles.scss";
import { Card, Text, Badge, Button, Group } from "@mantine/core";
import type { VacancyType } from "../../../../../types";
import { formatSalary, formatSchedule, getScheduleClass } from "./Titles-logic"
import classNames from "classnames";

type TitlesProps = {
  vacancy: VacancyType;
};

const Titles = ({ vacancy }: TitlesProps) => {
    return(
        <>
        <Card className="title" radius="md">
            <Group className="title-head">
                <Text className="title-head-name" fw={600} c="#364FC7">{vacancy.name}</Text>
                <Group className="title-head-decr">
                    <Text className="title-head-decr-pay" fw={400} size="sm" c="black">
                        {formatSalary(vacancy.salary)}
                    </Text>
                    <Text className="title-head-decr-exp" fw={400} size="sm" c="dimmed">{vacancy.experience?.name ?? "Опыт не указан"}</Text>
                </Group>
            </Group>

            <Group className="title-info">
                <Text className="title-info-company" fw={400} size="sm" c="dimmed">{vacancy.employer?.name ?? "Компания не указана"}</Text>
                <Badge className={classNames("title-info-format", getScheduleClass(vacancy.schedule))} color="indigo" radius="xs" size="xs">
                    {formatSchedule(vacancy.schedule)}
                </Badge>
                <Text className="title-info-location" size="sm" c="black">{vacancy.area?.name ?? "Регион не указан"}</Text>
            </Group>

            <Group className="title-buttons">
                <Button className="title-buttons-view">Смотреть вакансии</Button>
                <Button className="title-buttons-reply"
                        component="a"
                        href={vacancy.alternate_url}
                        target="_blank"
                        rel="noopener noreferrer">
                    Откликнуться
                </Button>
            </Group>
        </Card>
        </>
    )};

export default Titles;