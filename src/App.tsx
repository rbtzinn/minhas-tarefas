import EstiloGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLaretal'
import ListaDeTarefas from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
