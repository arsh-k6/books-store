import { useReducer } from 'react';
import CartContext from "./cartContext";
import { ICart, IBook } from '../constants/interfaces'
import { cartReducer, defaultCartState } from './cartReducer'

const CartProvider = (props: any) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: IBook) => {
        dispatchCartAction({ type: 'ADD', item })
    }

    const removeItemFromCartHandler = (id: number) => {
        dispatchCartAction({ type: 'REMOVE', id })
    }

    const cartContext: ICart = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;