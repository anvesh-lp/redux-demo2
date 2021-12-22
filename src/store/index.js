import {configureStore} from "@reduxjs/toolkit";
import showCart from "./ui-slice";
import cartItemsSlice from "./cart-slice";

const store = configureStore({
    reducer: {ui: showCart.reducer, cartItemsSlice: cartItemsSlice.reducer}
})

export default store;