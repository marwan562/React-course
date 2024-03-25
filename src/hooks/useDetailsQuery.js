import { useQuery } from "react-query";
import { getDetailsPets } from "../Api/AnimalsAPI";

const useDetailsQuery = (id) => {
  const { isLoading, error, isError, data } = useQuery(
    ["animal", id],
    () => getDetailsPets(id),
    {
      select: (data) => data.pets[0],
    }
  );
  return { isLoading, error, isError, data };
};

export default useDetailsQuery;
