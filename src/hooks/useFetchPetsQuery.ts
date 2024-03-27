import { useQuery } from "react-query";
import { getFetchPets } from "../Api/AnimalsAPI";
import {SearchParamsType} from "../types/Common";

const useFetchPetsQuery = (searchParams : SearchParamsType) => {
  const petsQuery = useQuery(
    ["pets", searchParams],
     getFetchPets,
    {
      enabled: !!searchParams,
    }
  );
  return petsQuery?.data?.pets || [];
};

export default useFetchPetsQuery;
