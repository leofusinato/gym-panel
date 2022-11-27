import * as React from "react";
import { Link } from "react-router-dom";
import { Form, ButtonToolbar, Button, InputPicker, Panel, Table } from "rsuite";

import { itemsMock } from "../../mocks/items";
import { studentsMock } from "../../mocks/students";

type ItemProps = {
  name: string;
  price: string;
  quantity: number;
  total: number;
};

const studentsList = studentsMock.map((item) => ({
  label: `${item.name}`,
  value: item.id,
}));

const itemsList = itemsMock.map((item) => ({
  label: `${item.name} - R$ ${item.price}`,
  value: item.id,
}));

const { HeaderCell, Cell, Column } = Table;

export function AddSale() {
  const [items, setItems] = React.useState<ItemProps[]>([]);
  const [total, setTotal] = React.useState<number>(0);

  React.useEffect(() => {
    let itemsTotal = 0;
    items.forEach((item) => {
      itemsTotal += Number(item.total);
    });
    setTotal(itemsTotal);
  }, [items]);

  return (
    <div>
      <Form>
        <Panel bordered>
          <label>Aluno</label>
          <InputPicker
            placeholder="Selecione"
            data={studentsList}
            style={{ marginLeft: 16, marginRight: 16, width: 224 }}
          />
          <label>Item</label>
          <InputPicker
            placeholder="Selecione"
            data={itemsList}
            style={{ marginLeft: 16, width: 224 }}
          />
          <Form.Group controlId="price" style={{ marginTop: 16 }}>
            <Form.ControlLabel>Quantidade</Form.ControlLabel>
            <Form.Control name="price" type="number" style={{ width: 100 }} />
          </Form.Group>
          <Button
            appearance="primary"
            onClick={() =>
              setItems((prevState) => [
                ...prevState,
                {
                  name: "Suplemento",
                  price: "30,00",
                  quantity: 2,
                  total: 60,
                },
              ])
            }
          >
            Adicionar item
          </Button>
        </Panel>
      </Form>
      <Form>
        <Panel style={{ marginTop: 24 }} header="Lista de itens" bordered>
          {items.length > 0 && (
            <Table data={items}>
              <Column width={200} fullText fixed>
                <HeaderCell>Nome</HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={200}>
                <HeaderCell>Preço (R$)</HeaderCell>
                <Cell dataKey="price" />
              </Column>

              <Column width={200}>
                <HeaderCell>Quantidade</HeaderCell>
                <Cell dataKey="quantity" />
              </Column>

              <Column width={200}>
                <HeaderCell>Total (R$)</HeaderCell>
                <Cell dataKey="total" />
              </Column>
            </Table>
          )}
        </Panel>
      </Form>
      <p style={{ marginTop: 16 }}>{`Total: ${total}`}</p>
      <Form>
        <Form.Group>
          <ButtonToolbar>
            <Link to="/home">
              <Button appearance="primary" style={{ marginTop: 24 }}>
                Cadastrar venda
              </Button>
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
}
