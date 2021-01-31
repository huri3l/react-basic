import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro onSubmit={aoEnviarForm} validateCPF={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11)
    return { valido: false, texto: "CPF deve ter 11 dígitos." };

  return { valido: true, texto: "" };
}

export default App;
