import { useState, useEffect } from "react";

const cache = {};

export const useListings = (fetchFunction, ...params) => {

  const key = fetchFunction.name + JSON.stringify(params);

  const [listings, setListings] = useState(cache[key] ?? []);
  const [loading, setLoading] = useState(!(key in cache));
  const [error, setError] = useState(null);

  const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        
        const data = await fetchFunction(...params);

        cache[key] = data;
        setListings(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    if (key in cache) return;

    fetchData();
  }, [key]);

  return { listings, loading, error };
};