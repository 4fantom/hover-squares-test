import axios from "axios";
import { useEffect, useState } from "react";

export const ApiClient = axios.create({
  baseURL: "http://demo7919674.mockable.io",
  headers: {
    Accept: "application/json",
    withCredentials: false,
  },
});

const useFetch = (link, body = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await ApiClient.get(link, body);
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return { loading: isLoading, data: apiData, error: apiError };
};

export default useFetch;
