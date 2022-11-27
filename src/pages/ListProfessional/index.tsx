import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Panel, Table } from "rsuite";

const { HeaderCell, Cell, Column } = Table;

const createRowData = (rowIndex: any) => {
  const randomKey = Math.floor(Math.random() * 9);
  const names = [
    "Hal",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Hazel",
  ];
  const cities = [
    "Beijing",
    "Shanghai",
    "New Amieshire",
    "New Gust",
    "Lefflerstad",
    "East Catalina",
    "Ritchieborough",
    "Gilberthaven",
    "Eulaliabury",
  ];
  const emails = [
    "yahoo.com",
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "live.com",
    "msn.com",
    "yandex.com",
    "mail.ru",
  ];
  const birth = [
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
  ];

  return {
    id: rowIndex + 1,
    name: names[randomKey],
    city: cities[randomKey],
    email: names[randomKey].toLocaleLowerCase() + "@" + emails[randomKey],
    birth: birth[randomKey],
  };
};

const data = Array.from({ length: 20 }).map((_, index) => createRowData(index));

export function ListProfessional() {
  return (
    <Panel header="Lista de profissionais" bordered bodyFill>
      <Link to={"add-profissional"}>
        <Button
          style={{ marginLeft: 24, marginBottom: 24 }}
          appearance="primary"
        >
          Adicionar
        </Button>
      </Link>
      <Table height={400} data={data}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Cidade</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={300}>
          <HeaderCell>Nascimento</HeaderCell>
          <Cell dataKey="birth" />
        </Column>
      </Table>
    </Panel>
  );
}
