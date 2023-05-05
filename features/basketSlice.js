import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            let copyOfBasket = [...state.items];

            if(index >= 0){
                copyOfBasket.splice(index, 1)
            } else {
                alert(`Can't remove product with id of "${action.payload.id}" from the basket`)
            }

            state.items = copyOfBasket;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addToBasket,
    removeFromBasket
} = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(
    (item) => item.id === id);
export default basketSlice.reducer