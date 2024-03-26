import { useCallback, useEffect, useState } from "react";

const localCache = {};

const useDetailsPets = (id) => {
  const [details, setDetails] = useState(null);

  const fetchDetailsPets = useCallback(async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    localCache[id] = json.pets[0] || [];
    setDetails(localCache[id]);
  }, [id]);

  useEffect(() => {
    if (localCache[id]) {
      setDetails(localCache[id]);
    } else {
      fetchDetailsPets();
    }
  }, [id, fetchDetailsPets]);
  return { details, setDetails };
};

export default useDetailsPets;
