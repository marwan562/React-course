import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Animal, BreedsAPIResponse, PetsAPIResponse, SearchParamsType } from '../types/Common'


export const petApi = createApi({
    reducerPath: 'petApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://pets-v2.dev-apis.com'}),
    endpoints: (builder) => ({
        getPen: builder.query<PetsAPIResponse , number>({
            query: id => ({url: 'pets' , params: {id}})
         }),
         
        // http://pets-v2.dev-apis.com/breeds?animal=dog

        getbreeds: builder.query<BreedsAPIResponse , Animal>({
            query: animal => ({url: 'breeds' , params: {animal}})
        }),

        // http://pets-v2.dev-apis.com/pets?animal=&location=&breed=

        getPetsSearch: builder.query<PetsAPIResponse , SearchParamsType>({
            query: (SearchParams) => ({url:'pets' , params: {...SearchParams}})
        })
    })
})

export const { useGetPenQuery , useGetbreedsQuery , useGetPetsSearchQuery} = petApi