import './index.css';
import CartWidget from '../CartWidget'

const NavBar = ()  => {
    return (
        <>
            <navbar>
                <h1 className='web-title'>TUYO</h1>
                <ul className='ul-navbar'>
                    <li><a>Tecnología</a></li>
                    <li><a>Hogar y muebles</a></li>
                    <li><a>Electrodomésticos</a></li>
                    <li><a>Herramientas</a></li>
                    <li><a>Vestimenta</a></li>
                    <li><a>Salúd y belleza</a></li>
                    <li><a>Juguetes</a></li>
                </ul>
                <CartWidget/>
            </navbar>
        </>
        
    )
}

export default NavBar