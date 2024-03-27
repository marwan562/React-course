import { configureStore } from '@reduxjs/toolkit'
import searchPetsReducer from '../Search-PetsSlice/searchPetsSlice'
import { petApi } from '../../../Services/pet'

export const store = configureStore({
    reducer:{
        searchPets:searchPetsReducer,
        //add the genrated redcer
        [petApi.reducerPath]: petApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(petApi.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch