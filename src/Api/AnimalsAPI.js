import axios from "axios";

export const getDetailsPets = async (id) => {
  const res = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  return res.data;
};

export const getBreesPets = async (animal) => {
  const res = await axios.get(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  return res.data;
};
