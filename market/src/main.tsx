import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/home/Home'
import Cart from './components/pages/Cart/Cart'
import Product from './components/pages/Product/Product'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { persistor, store } from './store/store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/product/:id' element={<Product />} />
					</Routes>
				</Router>
			</PersistGate>
		</Provider>
	</QueryClientProvider>
)
