import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import { NavBar } from "./components/NavBar";
import { AddStudent } from "./pages/AddStudent";
import { Home } from "./pages/Home";
import { ListStudent } from "./pages/ListStudent";

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
      </Container>
    </BrowserRouter>
  );
}
