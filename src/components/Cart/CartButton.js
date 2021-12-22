import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {cartUi} from "../../store/ui-slice";
import {useSelector} from "react-redux";

const CartButton = (props) => {
    const dispatch=useDispatch()
    const totalQ=useSelector(state=>state.cartItemsSlice.totalQuantity)
    const cartToggleHandler = (event) => {
      dispatch(cartUi.toggle())
    }
  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQ}</span>
    </button>
  );
};

export default CartButton;
