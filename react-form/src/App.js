import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";

import { validarCPF, validarNroCaracteres } from "./models/Cadastro";

import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { Container, Typography } from "@material-ui/core";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarNroCaracteres,
            nome: validarNroCaracteres,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
