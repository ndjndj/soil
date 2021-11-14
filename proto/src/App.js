import Header from "./components/header";
import List from "./components/list"
import SimpleList from "./components/listsample";
import SimpleCard from "./components/card";
import { Container } from "@material-ui/core";
import ListItem from "./components/listItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Container>

    </div>
  );
}

export default App;
