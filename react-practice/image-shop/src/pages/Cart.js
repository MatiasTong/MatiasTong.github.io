import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart(){
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item =>(
        <CartItem key ={item.id} item={item} />
    ))

    let totalCost = cartItems.length * 5.99
          totalCost = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
     const placeOrder= ()=>{
        setButtonText("Ordering...")
        setTimeout(()=>{
            console.log("Order Placed!")
            setButtonText("PlaceOrder")
            emptyCart();
        }, 3000)
    }

    
        return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            { cartItems.length > 0 ?
            <div className = "order-button">
                <button onClick={placeOrder}> {buttonText} </button>
            </div>:
            <p>You have no items in your cart</p>
}
        </main>
    )
}

export default Cart