import { useQuery } from "react-query";
import { getFetchPets } from "../Api/AnimalsAPI";

const useFetchPetsQuery = (SearchParams) => {
  const petsQuery = useQuery(
    ["pets", SearchParams],
    () => getFetchPets(SearchParams),
    {
      enabled: !!SearchParams,
    }
  );
  return petsQuery?.data?.pets || [];
};

export default useFetchPetsQuery;
