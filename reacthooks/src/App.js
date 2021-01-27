import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1">Formulário de cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
