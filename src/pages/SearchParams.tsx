import Results from "../components/Results";
import useBreedQuery from "../hooks/useBreedQuery";
import useFetchPetsQuery from "../hooks/useFetchPetsQuery";
import type { Animal, SearchParamsType } from "../types/Common";
import {  searchPets} from "../features/Toolkit/Search-PetsSlice/searchPetsSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks/hooks";
import { useGetbreedsQuery, useGetPenQuery, useGetPetsSearchQuery } from "../Services/pet";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  const searchParams = useAppSelector(state => state.searchPets.value)
  const dispatch = useAppDispatch()

  const pets = useGetPetsSearchQuery(searchParams);

  const canSave =  Boolean(searchParams.location) && Boolean(searchParams.animal);

  const breedsQuery = useGetbreedsQuery(searchParams.animal , {skip: !searchParams.animal});
  const breeds = breedsQuery?.data?.breeds ?? []

  const handleSubmitChange = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const location = formData.get('location')
    const animal = formData.get('animal')
    const breed = formData.get('breed')
    dispatch(searchPets({location , animal, breed} as SearchParamsType))
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
            defaultValue={searchParams.location}
            onChange={(e) => dispatch(searchPets({...searchParams ,location: e.target.value} ))}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            defaultValue={searchParams.location}
            onChange={(e) => dispatch(searchPets({...searchParams ,animal: e.target.value as Animal} ))}
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
            defaultValue={searchParams.breed}
            onChange={(e) => dispatch(searchPets({...searchParams ,breed: e.target.value} ))}
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
        <Results pets={pets.data?.pets ?? []} />
      </div>
    </div>
    
  );
};

export default SearchParams;
