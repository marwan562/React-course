import axios from "axios";

export const getDetailsPets = async (id) => {
  const res = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  return res.data;
};
