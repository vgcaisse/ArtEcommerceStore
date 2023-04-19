import './App.css';

//library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//component imports
import { Navbar } from './components/navbar'
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { Items } from './pages/items/items';

//context provider
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/items' element={<Items />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
