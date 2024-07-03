// src/App.js
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import ItemPage from './ItemPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/item" component={ItemPage} />
      </Switch>
    </div>
  );
}

export default App;
