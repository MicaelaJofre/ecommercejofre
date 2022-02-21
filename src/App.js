import { NavBar } from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ListContainer/ItemListContainer";
import './App.css';

function App() {
  return (
    < div className = "App" >
      <header>
        <NavBar />
        < ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
