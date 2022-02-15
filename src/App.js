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
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/:name" >
          <ResultsPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    );
}

export default App;
