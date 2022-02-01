import './styles/styles.scss';
import ResponsiveAppBar from './Components/NavBar/ResponsiveAppBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
          <ResponsiveAppBar/>
        </ThemeProvider>
      </div>
  );
}

export default App;
