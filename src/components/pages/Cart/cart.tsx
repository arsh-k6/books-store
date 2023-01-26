import { useContext } from "react";
import CartContext from "../../../store/cartContext";
import { Item } from "../../../constants/interfaces";
import classes from './cart.module.css';
import CartItem from "../../shared/cartItem/cartItem";

const Cart = () => {
    const { items, totalAmount, removeItem, addItem } = useContext(CartContext);

    return (
        <div className={classes.cartContainer}>
            <div className={classes.innerContainer}>
                <h3 className={classes.heading}>Shopping Cart</h3>
                {items.map((book: Item) =>
                    <CartItem
                        key={book.id}
                        onAddItem={addItem}
                        onRemoveItem={removeItem}
                        totalAmount={totalAmount}
                        item={book} />
                )}
                <div className={classes.total}>
                    <div className={classes.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}
export default Cart;