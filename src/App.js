import { NavBar } from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ListContainer/ItemListContainer";
import './App.css';

function App() {
  return (
    < div className = "App" >
      <header>
        <NavBar />
      </header>
      <main>
        < ItemListContainer/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
