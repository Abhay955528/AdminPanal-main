import  {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { estiloApi } from '../servises/apis'

export const store = configureStore({
    reducer:{
        [estiloApi.reducerPath]:estiloApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(estiloApi.middleware),
})
setupListeners(store.dispatch)