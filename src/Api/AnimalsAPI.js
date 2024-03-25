import axios from "axios";

export const getFetchPets = async ({ location, breed, animal }) => {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  return res?.json();
};

export const getDetailsPets = async (id) => {
  const res = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  return res.data;
};

export const getBreesPets = async (animal) => {
  try {
    // Make GET request using Axios
    const response = await axios.get(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    // Return the data from the response
    return response.data ?? [];
  } catch (error) {
    // Handle any errors
    throw new Error("Error fetching data");
  }
};
