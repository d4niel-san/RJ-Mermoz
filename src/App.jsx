import './styles/styles.scss';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
