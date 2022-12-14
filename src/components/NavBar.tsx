import * as React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "rsuite";

export function NavBar() {
  return (
    <Navbar>
      <Navbar.Brand>GYM-PANEL</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Link to={"add-sale"}>Nova venda</Link>
        </Nav.Item>
        <Nav.Menu title="Cadastros">
          <Link to={"add-aluno"}>
            <Nav.Item>Alunos</Nav.Item>
          </Link>
          <Link to={"add-profissional"}>
            <Nav.Item>Profissionais</Nav.Item>
          </Link>
          <Link to={"add-item"}>
            <Nav.Item>Itens</Nav.Item>
          </Link>
        </Nav.Menu>
        <Nav.Menu title="Consultar">
          <Link to={"list-alunos"}>
            <Nav.Item>Alunos</Nav.Item>
          </Link>
          <Link to={"list-profissional"}>
            <Nav.Item>Profissionais</Nav.Item>
          </Link>
          <Link to={"list-vendas"}>
            <Nav.Item>Vendas</Nav.Item>
          </Link>
          <Link to={"list-item"}>
            <Nav.Item>Itens</Nav.Item>
          </Link>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item>Sair</Nav.Item>
      </Nav>
    </Navbar>
  );
}
