import classes from './cartItem.module.css';
import { ICartItem } from "../../../constants/interfaces";

const CartItem: React.FC<ICartItem> = ({ item, onAddItem, onRemoveItem }) => {
    return (
        <div className={classes.cartItems}>
            <div className={classes.image}>
                <img src={item.image} />
            </div>
            <div className={classes.about}>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h3>AUTHOR: {item.author}</h3>
            </div>
            <div className={classes.counter}>
                <div className={classes.btn} onClick={() => onAddItem(item)}>+</div>
                <div className={classes.count}>{item.quantity}</div>
                <div className={classes.btn} onClick={() => onRemoveItem(item.id)}>-</div>
            </div>
            <div className={classes.price}>
                <div className={classes.amount}>${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        </div>
    )
}
export default CartItem;