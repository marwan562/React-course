import Pet from "./Pet";
import { Pet as PetType } from "../types/Common";

type Props = {
 pets: PetType[]
}
const Results = ({pets}:Props) => {
  return (
    <>
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return <Pet key={pet.id} {...pet} />;
        })
      )}
    </>
  );
};

export default Results;
