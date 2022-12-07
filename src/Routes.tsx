import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { AddProfessional } from "./pages/AddProfessional";
import { AddStudent } from "./pages/AddStudent";
import { ListStudent } from "./pages/ListStudent";
import { ListProfessional } from "./pages/ListProfessional";
import { AddItem } from "./pages/AddItem";
import { ListItem } from "./pages/ListItem";
import { AddSale } from "./pages/AddSale";
import { ListSale } from "./pages/ListSale";

const Container = styled.div`
  padding: 24px;
`;

export function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Route component={Home} path="/home" exact />
        <Route component={AddStudent} path="/add-aluno" exact />
        <Route component={ListStudent} path="/list-alunos" exact />
        <Route component={AddProfessional} path="/add-profissional" exact />
        <Route component={ListProfessional} path="/list-profissional" exact />
        <Route component={AddItem} path="/add-item" exact />
        <Route component={ListItem} path="/list-item" exact />
        <Route component={AddSale} path="/add-sale" exact />
        <Route component={ListSale} path="/list-vendas" exact />
      </Container>
    </BrowserRouter>
  );
}
