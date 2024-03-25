import { useQuery } from "react-query";
import { getBreesPets } from "../Api/AnimalsAPI";

const useBreedQuery = (animal) => {
  const { data } = useQuery(["animal", animal], () => getBreesPets(animal), {
    enabled: !!animal,
  });
  return data;
};

export default useBreedQuery;
