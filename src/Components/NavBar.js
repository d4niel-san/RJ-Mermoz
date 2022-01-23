import './NavBar.css';
import Button from '@mui/material/Button';


export const NavBar = () => {
    return (
        < nav >
            <hr />
            <ul className="MenuItems">
                <Button variant="contained">Hello World</Button>
                <li>Pagina Principal</li>
                <li>Productos</li>
                <li>Redes</li>
                <li>Contacto</li>
                <li>Ingresar</li>
            </ul>
            <hr />
        </nav >
    )
}