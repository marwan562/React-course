import { useQuery } from "react-query";
import { getDetailsPets } from "../Api/AnimalsAPI";



const useDetailsQuery = (id: number) => {
  const { isLoading, error, isError, data } = useQuery(
    ["animal", id],
    getDetailsPets,
    {
      select: (data) => data.pets[0] ,
      enabled: !!id,
    }
  );
  return { isLoading, error, isError, data };
};

export default useDetailsQuery 
