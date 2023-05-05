import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'Siempre tan cool'}/>
    </div>
  );

}

export default App;
