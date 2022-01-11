import {cartUi} from "./ui-slice";
import {cartItemsActions} from "./cart-slice";

export const fetchCartDetails = () => {
    return async dispatch => {
        const fetchData = async () => {
            const responce = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/cart.json");
            if (!responce.ok) {
                throw  new Error("Could not load data");
            }
            return await responce.json()
        };
        try {
            const cartdata = await fetchData()
            console.log(cartdata)
            dispatch(cartItemsActions.replaceCart(cartdata))
        } catch (error) {
            dispatch(cartUi.showNotification({
                status: "error",
                title: "loading failed",
                message: "error loading the cart data"
            }));
        }

    }
}