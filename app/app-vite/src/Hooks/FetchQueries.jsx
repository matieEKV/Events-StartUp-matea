import { useEffect, useState } from "react";
import api from "../api";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const targetUrl = api("/events");
      const response = await fetch(api("events"));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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
  }, []);

  return { data, loading, error };
};
