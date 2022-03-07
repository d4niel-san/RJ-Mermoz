
import playlogo from "./Images/playstore.png";
import appstorelogo from "./Images/appstore.png";
import logo from "./Images/logoProp.png";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Descarga nuestra aplicacion</h3>
                        <p> Descargar App para telefonos Android e IOS <br />(ofertas exclusivas. Se primero en enterarte de las novedades!!)</p>
                        <div className="app-logo">
                            <img src={playlogo} alt="play"/>
                            <img src={appstorelogo} alt="app" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logo} alt="logo" />
                        <p>Nuestro compromiso, que disfrutes lo ultimo en tecnologia a precios competitivos y con una atencion y soporte personalizados, atendemos personas, no clientes.</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Links utiles</h3>
                        <ul>
                            <li>Cupones</li>
                            <li>Blog</li>
                            <li>Politica de Reembolso</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Siguenos</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instragram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Proyecto Final Curso React-Js CoderHouse - Febrero 2022 - Alumno: Mermoz, Daniel</p>
            </div>
        </div>
    )
}