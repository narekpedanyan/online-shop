import '../../assets/styles/index.scss';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../home';
import Create from '../create';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
