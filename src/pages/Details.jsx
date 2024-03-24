import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useDetailsPets from "../hooks/useDetailsPets";
import Pet from "../components/Pet";

const DetailsPets = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { details, setDetails } = useDetailsPets(id);

  let noneImage = "https://pets-images.dev-apis.com/pets/none.jpg";

  const handleImages =
    details?.images?.length > 0 ? details?.images[0] : noneImage;

  const handleBackHome = () => {
    navigate("/");
    setDetails([]);
  };
  return (
    <div className="details">
      {!Pet ? (
        <h4>loading...</h4>
      ) : (
        <div>
          <div className="image-container">
            <img src={handleImages} alt={details.name} />
          </div>
          <h1>{details.name}</h1>
          <h2>{`${details.animal} - ${details.breed} - ${details.city} - ${details.state}`}</h2>
          <p>{details.description}</p>
          <button onClick={handleBackHome}>Back</button>
        </div>
      )}
    </div>
  );
};

export default DetailsPets;
