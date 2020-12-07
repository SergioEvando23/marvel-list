import './App.css';
import ListScreen from './pages/listScreen/ListScreen';
import DetailScreen from './pages/detailScreen/DatailScreen'

function App() {
  return (
    <div className="app">
      <div className="app__header"> 
        app__reader
      </div>
      <div  className="app__body" >
        app__body
        <ListScreen />
        <DetailScreen />
      </div>
    </div>
  );
}

export default App;
