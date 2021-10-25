import '../../assets/styles/index.scss';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../home';
import Create from '../create';
import Header from "../header";
import SelectedProduct from "../selectedProduct";

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path={`/detailed/:productId`} component={SelectedProduct} />
      </Switch>
    </main>
  );
}

export default App;
