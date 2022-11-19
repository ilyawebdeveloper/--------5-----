import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/ProductInterface'
import { IInitalState } from './types'

const initialState: IInitalState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.items = [...state.items, action.payload]
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((item) => item.id !== action.payload)
		},
	},
})
