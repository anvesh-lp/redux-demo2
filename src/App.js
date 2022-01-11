import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {cartUi} from "./store/ui-slice";
import Notification from "./components/UI/Notification";

var isInitial=true;

function App() {

    const isShowCart = useSelector(state => state.ui.isCartVisible)
    const cart = useSelector(state => state.cartItemsSlice)
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {


        const sendRequest = async () => {
            dispatch(cartUi.showNotification({
                status: "pending",
                title: "is loading",
                message: "sending data"
            }));
            console.log("Putting the data")
            const responce = await fetch("https://react-database-16425-default-rtdb.firebaseio.com/cart.json", {
                method: "put",
                body: JSON.stringify(cart)
            });
            console.log("finished putting the data")
            if (!responce.ok) {
                throw new Error("Sending cart data failed")
            }
            dispatch(cartUi.showNotification({
                status: "success",
                title: "data was loaded",
                message: "cart loaded sussecfull"
            }));
        }

        if (isInitial){
            isInitial=false
            return;
        }

        sendRequest().catch(() => {
            dispatch(cartUi.showNotification({
                status: "error",
                title: "loading failed",
                message: "error loading the cart data"
            }));
        })



    }, [cart,dispatch])

    return (
        <Fragment>
            {notification && <Notification message={notification.message} title={notification.title} status={notification.status}/>}
            <Layout>
                {isShowCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
