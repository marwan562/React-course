import { useState } from "react";
import Results from "../components/Results";
import useBreedQuery from "../hooks/useBreedQuery";
import useFetchPetsQuery from "../hooks/useFetchPetsQuery";

type state = {
  location: string;
  animal: string;
  breed: string;
}

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState<state>({
    location: "",
    animal: "",
    breed: "",
  });

  // const { pets, fetchPets } = useFetchPets({ animal, location, breed });

  const pets = useFetchPetsQuery(searchParams);

  const canSave =
    Boolean(searchParams.location) && Boolean(searchParams.animal);

  const breeds = useBreedQuery(searchParams.animal);

  const handleLocationChange = (e:any) => {
    const location = e.target.value;
    setSearchParams((prevParams) => ({
      ...prevParams,
      location,
    }));
  };

  const handleAnimalChange = (e:any) => {
    const animal = e.target.value;
    setSearchParams((prevParams) => ({
      ...prevParams,
      animal,
      breed: "", // Reset breed when animal changes
    }));
  };

  const handleBreedChange = (e:any) => {
    const breed = e.target.value;
    setSearchParams((prevParams) => ({
      ...prevParams,
      breed,
    }));
  };

  const handleSubmitChange = (e:any) => {
    e.preventDefault();
  };
  return (
    <div className="search-params">
      <form onSubmit={handleSubmitChange}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            placeholder="Location"
            name="location"
            value={searchParams.location}
            onChange={handleLocationChange}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={searchParams.animal}
            onChange={handleAnimalChange}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds?.length}
            id="breed"
            name="breed"
            value={searchParams.breed}
            onChange={handleBreedChange}
          >
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button disabled={!canSave}>Submit</button>
      </form>
      <div className="search">
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
