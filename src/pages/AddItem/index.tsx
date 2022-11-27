import * as React from "react";
import { Link } from "react-router-dom";
import { Form, ButtonToolbar, Button } from "rsuite";

export function AddItem() {
  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.ControlLabel>Nome</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.ControlLabel>Preço</Form.ControlLabel>
          <Form.Control name="price" type="number" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
          <ButtonToolbar>
            <Link to="/home">
              <Button appearance="primary" style={{ marginTop: 24 }}>
                Cadastrar
              </Button>
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
}
