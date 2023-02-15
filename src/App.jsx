import { Typography, Grid } from "@mui/material"
import { Container } from "@mui/system"
import Formulario from "./components/Formulario"

function App() {

  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h1" variant="h3">
          Buscador de Noticias
        </Typography>
      </header>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          md={6}
          lg={4}
        >
          <Formulario />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
