import { useState, useEffect } from "react";

export const useListings = (fetchFunction, params = {}, enabled = true) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchFunction(params);
      setListings(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!fetchFunction || !enabled) return;

    fetchData();
  }, [fetchFunction, enabled, JSON.stringify(params)]);

  return { listings, loading, error };
};