import { useQuery } from "react-query";
import { getBreesPets } from "../Api/AnimalsAPI";
import {Animal } from '../types/Common'


const useBreedQuery = (animal: Animal) => {
  const { data } = useQuery(["breed", animal], getBreesPets, {
    enabled: !!animal,
  });
  return data?.breeds;
};

export default useBreedQuery;
