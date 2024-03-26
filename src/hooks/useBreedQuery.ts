import { useQuery } from "react-query";
import { getBreesPets } from "../Api/AnimalsAPI";

const useBreedQuery = (animal) => {
  const { data } = useQuery(["breed", animal], () => getBreesPets(animal), {
    enabled: !!animal,
  });
  return data?.breeds;
};

export default useBreedQuery;
