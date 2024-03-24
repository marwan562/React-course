import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pet = ({ name, animal, breed, images, city, id }) => {
  let noneImage = "https://pets-images.dev-apis.com/pets/none.jpg";

  const handleImages = images.length > 0 ? images[0] : noneImage;

  return (
    <Link to={`/details/${id}`}>
      <div className="pet">
        <div className="image-container">
          <img src={handleImages} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Pet;
