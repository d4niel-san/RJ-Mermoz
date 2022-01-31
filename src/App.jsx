import { NavBarMenu } from './Components/NavBar/NavBar';
import ResponsiveAppBar  from './Components/NavBar/MatNavBar';
import { Button } from '@mui/material';
import './styles/styles.scss';

function App() {
  return (
    <div>
      <NavBarMenu/>
      <Button> yey </Button>
      <ResponsiveAppBar/>
    </div>
  );
}

export default App;
