import React, { useContext, useState } from "react"
import { Context } from "../Context"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function CartItem({ item }) {
    const [hovered, ref] = useHover()

    const { removeImageFromCart } = useContext(Context)

    // const trashIcon = () => {
    //     if( hovered === true){
    //      return <i className="ri-delete-bin-fill" onClick ={() => removeImageFromCart(item)} onMouseEnter ={() => setHovered(true)} onMouseLeave = {() => setHovered(false)}></i>
    //     } else{
    //      return <i className="ri-delete-bin-line" onClick ={() => removeImageFromCart(item)} onMouseEnter ={() => setHovered(true)} onMouseLeave = {() => setHovered(false)}></i>
    //     }
    // }

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item" >
            <i className={iconClassName}
                onClick={() => removeImageFromCart(item)}
                ref = {ref}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )

}
CartItem.propTypes ={
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem