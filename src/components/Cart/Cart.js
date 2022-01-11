import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";


const Cart = (props) => {

    const items = useSelector(state => state.cartItemsSlice.items);
    console.log(items)
    const cartItemsIterator = items.map((item) => (
        <ul key={item.id}>
            <CartItem item={item}/>
        </ul>
    ));
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            {cartItemsIterator}
        </Card>
    );
};

export default Cart;
