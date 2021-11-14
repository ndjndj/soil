import Header from "./components/header";
import List from "./components/list"
import SimpleList from "./components/listsample";
import SimpleCard from "./components/card";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Container>

    </div>
  );
}

export default App;
