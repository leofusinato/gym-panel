import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Panel, Table } from "rsuite";
import { salesMock } from "../../mocks/sales";

const { HeaderCell, Cell, Column } = Table;

export function ListSale() {
  return (
    <Panel header="Lista de vendas" bordered bodyFill>
      <Link to={"add-sale"}>
        <Button
          style={{ marginLeft: 24, marginBottom: 24 }}
          appearance="primary"
        >
          Adicionar
        </Button>
      </Link>
      <Table height={400} data={salesMock}>
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={600} fullText fixed>
          <HeaderCell>Aluno</HeaderCell>
          <Cell dataKey="student" />
        </Column>

        <Column width={600}>
          <HeaderCell>Quantidade de itens</HeaderCell>
          <Cell dataKey="itemsQuantity" />
        </Column>

        <Column width={600}>
          <HeaderCell>Preço (R$)</HeaderCell>
          <Cell dataKey="price" />
        </Column>
      </Table>
    </Panel>
  );
}
