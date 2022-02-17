import './styles/styles.scss';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './Components/Footer/Footer';
import { CartContext, CartProvider } from './Context/CartContext';
import { useState } from 'react';
import { stock } from './data/stock';
import { Cart } from './Components/Cart/Cart';

function App() {



  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos/:catId' element={<ItemListContainer/>}/>
                <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<ItemListContainer/>}/>
              </Routes>
              <Footer/>
          </ThemeProvider>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
