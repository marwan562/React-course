import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useDetailsQuery from "../hooks/useDetailsQuery";

const DetailsPets = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const { details, setDetails } = useDetailsPets(id);

  const { isLoading, error, isError, data } = useDetailsQuery(id);

  const handleBackHome = () => {
    navigate("/");
  };

  if (isError)
    return (
      <div className="details">
        <p>Error:{error.message}</p>
      </div>
    );

  return (
    <div className="details">
      {/* react loder spinner for loading */}
      <Loader data={isLoading} />
      {/* Results data details animals */}
      {data && (
        <div>
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
