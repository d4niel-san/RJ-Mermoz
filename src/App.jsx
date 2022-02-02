import './styles/styles.scss';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import HeadContainer from './Components/HeadContainer/HeadContainer';
import { Item } from './Components/Item/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        
        <ItemListContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
