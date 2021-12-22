import Card from '../UI/Card';
import classes from './ProductItem.module.css';
// import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {cartItemsActions} from "../../store/cart-slice";

const ProductItem = (props) => {
    const {title, price, description, id} = props;

    const dispatch=useDispatch();
    const addTocartButtonHandler=(event)=>{
        dispatch(cartItemsActions.addItemToCart({
            id,
            title,
            price,
            description
        }));
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addTocartButtonHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
