import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartItemsActions} from "../../store/cart-slice";

const CartItem = (props) => {
    const {title, price, description, id, total,quantity} = props.item;
    const dispatch = useDispatch();

    const addCartbuttonHandler = () => {
        dispatch(cartItemsActions.addItemToCart({
            id,
            title,
            price,
            description,
            quantity
        }))
    }
    const removeFromCartHandler = () => {
        dispatch(cartItemsActions.removeFromCart(id))
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={addCartbuttonHandler}>+</button>
                    <button onClick={removeFromCartHandler}>-</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
