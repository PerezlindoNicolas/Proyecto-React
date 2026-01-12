import "./CartWidget.css"

const CartWidget = () => {

  const imgCarrito = "/imagenes/CartWidget/Carrito.png"

  return (
    <div>
      <img className="imgCarrito"src={imgCarrito} alt="Carrito"/>
    </div>
  )
}

export default CartWidget