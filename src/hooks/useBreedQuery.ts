import { useQuery } from "react-query";
import { getBreesPets } from "../Api/AnimalsAPI";

type Props = {
  animal: string
}

const useBreedQuery = (animal: Props) => {
  const { data } = useQuery(["breed", animal], () => getBreesPets(animal), {
    enabled: !!animal,
  });
  return data?.breeds;
};

export default useBreedQuery;
