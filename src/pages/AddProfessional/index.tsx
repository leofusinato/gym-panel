import * as React from "react";
import { Link } from "react-router-dom";
import { Form, ButtonToolbar, Button, InputPicker } from "rsuite";
import { Row } from "./styles";

export function AddProfessional() {
  return (
    <div>
      <Form layout="inline">
        <Form.Group controlId="name">
          <Form.ControlLabel>Nome</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Nascimento</Form.ControlLabel>
          <Form.Control name="nascimento" type="date" />
        </Form.Group>
      </Form>
      <Form layout="inline">
        <Row>
          <label>Sexo</label>
          <InputPicker
            placeholder="Selecione"
            data={["Masculino", "Feminino", "Outro"].map((item) => ({
              label: item,
              value: item,
            }))}
            style={{ marginLeft: 16, width: 224 }}
          />
          <label style={{ marginLeft: 16 }}>Situação</label>
          <InputPicker
            placeholder="Selecione"
            data={["Ativado", "Desativado"].map((item) => ({
              label: item,
              value: item,
            }))}
            style={{ marginLeft: 16, width: 224 }}
          />

          <Form.Group controlId="phone">
            <Form.ControlLabel style={{ marginLeft: 16 }}>
              Telefone
            </Form.ControlLabel>
            <Form.Control name="phone" type="phone" />
          </Form.Group>
        </Row>
      </Form>
      <Form layout="inline">
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>
      </Form>
      <Form layout="inline">
        <Row>
          <Form.Group controlId="city">
            <Form.ControlLabel>Cidade</Form.ControlLabel>
            <Form.Control name="city" />
          </Form.Group>
          <label style={{ marginLeft: 16 }}>UF</label>
          <InputPicker
            placeholder="Selecione"
            data={["SC", "PR", "RS"].map((item) => ({
              label: item,
              value: item,
            }))}
            style={{ marginLeft: 16, width: 224 }}
          />
          <Form.Group controlId="cep">
            <Form.ControlLabel style={{ marginLeft: 16 }}>
              CEP
            </Form.ControlLabel>
            <Form.Control name="cep" />
          </Form.Group>
        </Row>
      </Form>
      <Form layout="inline">
        <Form.Group controlId="cep">
          <Form.ControlLabel>Rua</Form.ControlLabel>
          <Form.Control name="cep" />
        </Form.Group>
        <Form.Group controlId="cep">
          <Form.ControlLabel>Número</Form.ControlLabel>
          <Form.Control name="cep" />
        </Form.Group>
        <Form.Group controlId="cep">
          <Form.ControlLabel>Bairro</Form.ControlLabel>
          <Form.Control name="cep" />
        </Form.Group>
      </Form>
      <Form layout="inline">
        <Form.Group controlId="salario">
          <Form.ControlLabel>Salário (R$)</Form.ControlLabel>
          <Form.Control name="salario" type="number" />
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
