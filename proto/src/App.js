import Header from "./components/header";
import List from "./components/list"
import SimpleList from "./components/listsample";
import SimpleCard from "./components/card";
import { Container } from "@material-ui/core";
import ListItem from "./components/listItem";
import Login from "./pages/login";
import CreateIssue from "./pages/create-issue";
import DailyReport from "./pages/daily-report";
import CreateUser from "./pages/create-user";

function App() {
  return (
    <div className="App">
      <DailyReport />
    </div>
  );
}

export default App;
