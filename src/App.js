import './App.css';
import ListScreen from './pages/listScreen/ListScreen';
import DetailScreen from './pages/detailScreen/DatailScreen';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__app-header"> 
          <Link to="/"><Button variant="outlined" color="primary" style={{padding:"0.2em"}}>Home</Button></Link>
          <div className="app__app-header__app-header-logo"> 
          <Link to="/"><img src="https://images.vectorhq.com/images/previews/cd8/marvel-logo-psd-444569.png" width="95" height="35"/></Link>
          </div>
        </div>
        <div  className="app__body" >
        </div>
        <Switch>
          <Route exact path="/" component={ListScreen} />
          <Route exact path="/detail" component={DetailScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
