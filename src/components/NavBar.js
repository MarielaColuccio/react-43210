import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Tienda Online</h3>
            <div> 
                <button>Pantalones </button>
                <button> Remeras </button>
                <button>Tops </button>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar