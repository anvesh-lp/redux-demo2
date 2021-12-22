import {createSlice} from "@reduxjs/toolkit";

const showCart=createSlice({
    name: "showCart",
    initialState: {isCartVisible: false},
    reducers:{
        toggle(state){
            state.isCartVisible=!state.isCartVisible
        }
    }
})

export const cartUi=showCart.actions
export default showCart;