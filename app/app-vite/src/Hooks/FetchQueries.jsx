import { useEffect, useState } from "react";
import api from "../api";

export const useFetchData = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(api(url), options);
      if (!response.ok) {
        throw new Error("Something went wrong", error);
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
