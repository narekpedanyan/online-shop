import '../../assets/styles/index.scss';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../home';
import Create from '../create';
import Header from "../header";

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
