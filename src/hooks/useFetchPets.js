import { useEffect, useState } from "react";

const useFetchPets = ({ animal, location, breed }) => {
  const [pets, setPets] = useState([]);
  const fetchPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  };

  useEffect(() => {
    if (location) {
      fetchPets();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { pets, fetchPets };
};

export default useFetchPets;
