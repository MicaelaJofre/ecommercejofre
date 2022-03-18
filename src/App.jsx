import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import './App.css';
import { Home } from "./components/Home/Home";
import { ItemListContainer } from "./components/ListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ListContainer/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { CartContext } from "./context/CartContext";

function App() {
  const prueba =()=>{console.log()}
  return (
    <BrowserRouter>
      <CartContext.Provider value={
        prueba
      }>
        < div className="App" >
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoryId' element={< ItemListContainer />} />
              <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
