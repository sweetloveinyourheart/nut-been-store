import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductType } from '../../types/product'

// Define a type for the slice state
export interface CartItem {
    product: Product
    quantity: number
    type: ProductType
}

interface CounterState {
    items: CartItem[]
}

// Define the initial state using that type
const initialState: CounterState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addProduct: (state, action: PayloadAction<CartItem>) => {
            let currentItems = [...state.items]
            const newItem = action.payload

            const itemIndex = currentItems.findIndex((item) => {
                if (item.product._id === newItem.product._id && item.type.weight === newItem.type.weight) {
                    return item
                }
            })

            if (itemIndex >= 0) {
                currentItems[itemIndex].quantity = currentItems[itemIndex].quantity + 1
                state.items = currentItems
                return state
            }

            state.items = [...currentItems, newItem]
            return state
        },

        changeQuantity: (state, action: PayloadAction<CartItem>) => {
            let currentItems = [...state.items]
            const changedItem = action.payload

            const itemIndex = currentItems.findIndex((item) => {
                if (item.product._id === changedItem.product._id && item.type.weight === changedItem.type.weight) {
                    return item
                }
            })

            if (itemIndex >= 0) {
                currentItems[itemIndex] = changedItem
                state.items = currentItems
                return state;
            }
        },

        removeProduct: (state, action: PayloadAction<CartItem>) => {
            let currentItems = [...state.items]
            const deleteItem = action.payload

            const itemIndex = currentItems.findIndex((item) => {
                if (item.product._id === deleteItem.product._id && item.type.weight === deleteItem.type.weight) {
                    return item
                }
            })

            if (itemIndex >= 0) {
                currentItems.splice(itemIndex, 1)
                state.items = currentItems
                return state;
            }
        }
    },
})

export const { addProduct, removeProduct,changeQuantity } = cartSlice.actions

export default cartSlice.reducer