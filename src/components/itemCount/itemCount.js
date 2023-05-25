import { useState } from "react"

const itemCount = ({stock,initial, onadd})=> {
    const [quantity,setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity>1){
            setQuantity(quantity-1) 
        }
    }

    return ( 
        <div className ='Counter'>
            <div className='controls'>
            <button className="Button" onClick={decrement}>-</button>
            <h4 className='Number'>{quantity}</h4>
            <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
            <button className="Button" onClick={() => OnAdd(quantity)}disabled={!stock}>
                Agregar al carrito
            </button>
            </div>
            </div>
    )

    }