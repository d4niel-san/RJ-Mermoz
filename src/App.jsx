import './styles/styles.scss';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './Components/Footer/Footer';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';
import { stock } from './data/stock';

function App() {

  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
    if (!isInCart(item.id)){
      setCart( [...cart,item ])
    } else {
      if ((cart.find((prod) => prod.id === item.id).cantidad)+item.cantidad > (stock.find((prod) => prod.id === item.id).stock)){
        console.log("stock sobrepasado, no se debe agregar"); //falta aplicarlo
      }else{
        console.log("stock disponible, no agregado aun");  //falta aplicarlo
      }
    }
  }

  const isInCart = (id) =>{
    return cart.some((prod) => prod.id === id);
  }

  const cantidadCart = () =>{
    return cart.reduce( (acc,prod) => acc + prod.cantidad , 0)
  }
  const totalCart = () =>{
    return cart.reduce( (acc,prod) => acc + prod.cantidad * prod.precio , 0)
  }

  return (
    <div>
      <CartContext.Provider value={
          {
            cart,
            agregarAlCarrito,
            isInCart,
            cantidadCart,
            totalCart
          }
      }>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos/:catId' element={<ItemListContainer/>}/>
                <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<ItemListContainer/>}/>
              </Routes>
              <Footer/>
          </ThemeProvider>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
