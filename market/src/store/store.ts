import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slice'
import storage from 'redux-persist/lib/storage'

import { PersistConfig, persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST } from 'redux-persist'

const persisitConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartSlice.reducer
})

const persisiteReducer  = persistReducer(persisitConfig, rootReducer)

export const store = configureStore({
    reducer: persisiteReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>