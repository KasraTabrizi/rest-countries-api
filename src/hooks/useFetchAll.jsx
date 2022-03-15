import { useEffect, useState } from "react";

//filter: none, country, region
export const useFetchCountries = (filter = "none", query = "") => {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const setFetchFilter = (filter, query) => {
    let fetchType = "";
    if (filter === "none") {
      fetchType = `https://restcountries.com/v3.1/all`;
    }
    if (filter === "country") {
      fetchType = `https://restcountries.com/v3.1/name/${query}`;
    }
    if (filter === "region") {
      fetchType = `https://restcountries.com/v3.1/region/${query}`;
    }
    setLoading(true);
    fetch(fetchType)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setFetchFilter(filter, query);
  }, []);

  return [countries, error, loading, setFetchFilter];
};
