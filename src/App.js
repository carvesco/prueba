import logo from './logo.svg';
/*import {BrowserRouter as Router,
  Route,
  Redirect,
  Switch} from 'react-router-dom';*/
import { BrowserRouter as Router,
Route,Switch,Redirect } from 'react-router-dom';
import './App.css';

import MainPage from './Pages/MainPage';
import ResultsPage from './Pages/ResultsPage';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/prueba" exact>
          <MainPage/>
        </Route>
        <Route path="/prueba/:name" >
          <ResultsPage/>
        </Route>
        <Redirect to="/prueba"/>
      </Switch>
    </Router>
    );
}

export default App;
