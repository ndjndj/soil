import Header from "./components/header";
import List from "./components/list"
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <List />
      </Container>

    </div>
  );
}

export default App;
