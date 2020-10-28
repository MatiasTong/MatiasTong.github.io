import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
   const toggleFavorite = (id) => { 
        const updatedPhotos = allPhotos.map((photo) => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo  )
        setAllPhotos(updatedPhotos)
    }

    const addImageToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    const removeImageFromCart = (itemForRemoval) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemForRemoval.id ))
        console.log(cartItems)
    }

    const emptyCart =()=>{
        setCartItems([])
    }

    useEffect(()=> {
        fetch("https://api.yelp.com/v3/businesses/search?location=nyc",
        {
            method: 'GET',
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{ allPhotos, cartItems, toggleFavorite, addImageToCart, removeImageFromCart, emptyCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }