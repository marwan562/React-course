import { MagnifyingGlass } from "react-loader-spinner";

const Loader = ({ data }) => {
  return (
    <>
      {" "}
      <MagnifyingGlass
        visible={data}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </>
  );
};

export default Loader;
