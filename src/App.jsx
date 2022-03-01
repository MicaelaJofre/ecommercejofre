import { NavBar } from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ListContainer/ItemListContainer";
import './App.css';
import { Front } from "./components/front/Front";

function App() {
  return (
    < div className = "App" >
      <header>
        <NavBar />
      </header>
      <main>
        < ItemListContainer />
        {/* <Front /> */}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
