import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"

const NavBar = () => {

  return (
    <header>
        <h1 className="texto">Cafeteria Rotondo</h1>

        <nav>
            <ul>
                <li>Carta</li>
                <li>Promos</li>
                <li>Carrito</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar