import './App.css';
import ListScreen from './pages/listScreen/ListScreen';
import DetailScreen from './pages/detailScreen/DatailScreen';
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="app">
      <div className="app__app-header"> 
        <Button variant="contained" style={{padding:"0.2em"}}>Home</Button>
      </div>
      <div  className="app__body" >
        <ListScreen />
        <DetailScreen />
      </div>
    </div>
  );
}

export default App;
