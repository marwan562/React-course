import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useDetailsQuery from "../hooks/useDetailsQuery";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import { useGetPenQuery } from "../Services/pet";
import { Pet } from "../types/Common";

const DetailsPets = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const { details, setDetails } = useDetailsPets(id);

  if (!id) {
    throw new Error('no id provided to detailsPets');
  }

  const query = useGetPenQuery(+id)
  const data = query?.data?.pets[0] as Pet

  const handleBackHome = () => {
    navigate("/");
  };
  if (query.isError)
    return (
      <div className="details">
        <p>Error:{(query.error as Error).message}</p>
      </div>
    );
  return (
    <div className="details">
      {/* react loder spinner for loading */}
      <Loader data={query.isLoading} />
      {/* Results data details animals */}
      {data && (
        <div>
          <Counter />
          <Carousel image={data.images} />
          <h1>{data.name}</h1>
          <h2>{`${data?.animal} - ${data?.breed} - ${data?.city} - ${data?.state}`}</h2>
          <button>Adobt {data?.name}</button>
          <p>{data?.description}</p>
          <button onClick={handleBackHome}>Back</button>
        </div>
      )}
    </div>
  );
};

export default DetailsPets;
