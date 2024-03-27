import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal, SearchParamsType } from "../../../types/Common";
import { RootState } from "../Store/Store";
// getting the state type

const initialState = {
    value:{
        location:'',
        animal:'' as Animal,
        breed:''
    } as SearchParamsType
}
const searchPetsSlice = createSlice({
    name: "seachPets",
    initialState,
    reducers:{
        searchPets: ( state , action: PayloadAction<SearchParamsType>) => {
            state.value = action.payload
        }
    }

})

export const { searchPets } = searchPetsSlice.actions;

export const SellectAllSearch =  (state: RootState) => state.searchPets.value;

export default searchPetsSlice.reducer;