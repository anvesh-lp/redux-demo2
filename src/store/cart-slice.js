import {createSlice} from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
    name: "cartItemsState",
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    quantity: 1,
                    price: newItem.price,
                    total: newItem.price,
                    title: newItem.title,
                    description: newItem.description
                });
            } else {
                existingItem.total = existingItem.total + newItem.price;
                existingItem.quantity++
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            }
        }

    }
});

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice;