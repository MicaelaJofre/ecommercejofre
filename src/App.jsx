import { NavBar } from "./components/NavBar/NavBar";
import './App.css';
import { Home } from "./components/Home/Home";
import { ItemListContainer } from "./components/ListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ListContainer/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    < div className = "App" >
      <header>
        <NavBar />
      </header>
      <main>
        {/* <Home/> */}
        < ItemListContainer />
        <ItemDetailContainer />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
