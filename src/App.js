import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'Siempre tan cool'}/>
     <itemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity) }/>
    </div>
  );

}

export default App;
