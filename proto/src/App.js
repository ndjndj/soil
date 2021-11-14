import Header from "./components/header";
import List from "./components/list"
import SimpleList from "./components/listsample";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SimpleList />
      </Container>

    </div>
  );
}

export default App;
