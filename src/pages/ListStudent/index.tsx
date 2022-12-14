import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Panel, Table } from "rsuite";
import { studentsMock } from "../../mocks/students";

const { HeaderCell, Cell, Column } = Table;

export function ListStudent() {
  return (
    <Panel header="Lista de alunos" bordered bodyFill>
      <Link to={"add-aluno"}>
        <Button
          style={{ marginLeft: 24, marginBottom: 24 }}
          appearance="primary"
        >
          Adicionar
        </Button>
      </Link>
      <Table height={400} data={studentsMock}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>City</HeaderCell>
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
