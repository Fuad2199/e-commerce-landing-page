"use client"

import { CartItem } from '@/types';
export interface CartState{
    cartItems: CartItem[]
}
// create the slice for cart

import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
    
    // properties with default values
    cartItems: [],

}

export const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers:{
        //list of reducers action here
        addToCart(state, action){
            state.cartItems.push(action.payload)
        }
    }

})

// export reducer for cart and its actions
export default cartSlice.reducer; // reducer
export const { addToCart } = cartSlice.actions; // actions