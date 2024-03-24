import Pet from "./Pet";

/* eslint-disable react/prop-types */
const Results = ({pets}) => {
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
