import axios from "axios";
import { QueryFunction } from "react-query";
import {  Animal, BreedsAPIResponse, PetsAPIResponse , SearchParamsType } from "../types/Common";


export const getFetchPets : QueryFunction<PetsAPIResponse ,  ["pets", SearchParamsType]> = async ({ queryKey }) => {
    const [_ , {animal, location, breed}] = queryKey
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  return res?.json();
};

export const getDetailsPets : QueryFunction<PetsAPIResponse , ["animal", number]>= async ({queryKey}) => {
  
  const [ _ , id ] = queryKey
  try {
   
    const res = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    return res.data;
  } catch (err) {
    if (err) {
      throw new Error(`Something Error in Request: ${err}`);
    }
  }
};

export const getBreesPets : QueryFunction<BreedsAPIResponse , ["breed", Animal]> = async ({queryKey}) => {
  const [_ , animal ] = queryKey
  try {
    // Make GET request using Axios
    const response = await axios.get(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    // Return the data from the response
    return response.data ?? [];
  } catch (error) {
    // Handle any errors
    throw new Error("Error fetching data");
  }
};
