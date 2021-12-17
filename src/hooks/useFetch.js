import { get } from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const data = async () => {
      try {
        const cupcake = await get(`http://localhost:3005/${endpoint}`);
        setData(cupcake.data);
      } catch (error) {
        setError(error);
      }
    };

    data();
  }, [endpoint]);

  return [data, error];
};

export default useFetch;
