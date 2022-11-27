import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Panel, Table } from "rsuite";
import { itemsMock } from "../../mocks/items";

const { HeaderCell, Cell, Column } = Table;

export function ListItem() {
  return (
    <Panel header="Lista de itens" bordered bodyFill>
      <Link to={"add-item"}>
        <Button
          style={{ marginLeft: 24, marginBottom: 24 }}
          appearance="primary"
        >
          Adicionar
        </Button>
      </Link>
      <Table height={400} data={itemsMock}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={600} fullText fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={600}>
          <HeaderCell>Preço (R$)</HeaderCell>
          <Cell dataKey="price" />
        </Column>
      </Table>
    </Panel>
  );
}
