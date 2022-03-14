import { useEffect, useState } from "react";

//filter: none, country, region
export const useFetchCountries = (filter = "none", query = "") => {
  const [countries, setCountries] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  let fetchType = "";

  console.log(filter);

  if (filter === "none") {
    fetchType = `https://restcountries.com/v3.1/all`;
  }
  if (filter === "country") {
    fetchType = `https://restcountries.com/v3.1/name/${query}`;
  }
  if (filter === "region") {
    fetchType = `https://restcountries.com/v3.1/region/${query}`;
  }

  const fetchData = (fetchType) => {
    console.log(fetchType);
    setLoading(true);
    fetch(fetchType)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(fetchType);
  }, []);

  return [countries, error, loading, fetchData];
};

export const useFetchAll = () => {
  const [countries, setCountries] = useState();
  const [errorCountries, setErrorCountries] = useState();
  const [loadingCountries, setLoadingCountries] = useState(false);

  useEffect(() => {
    setLoadingCountries(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => setErrorCountries(err))
      .finally(() => setLoadingCountries(false));
  }, []);

  return [countries, errorCountries, loadingCountries];
};

export const useFetchCountry = (countryName) => {
  const [country, setCountry] = useState();
  const [errorCountry, setErrorCountry] = useState();
  const [loadingCountry, setLoadingCountry] = useState(false);

  useEffect(() => {
    setLoadingCountry(true);
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => setErrorCountry(err))
      .finally(() => setLoadingCountry(false));
  }, [countryName]);

  return [country, errorCountry, loadingCountry];
};

export const useFetchRegion = (regionName) => {
  const [region, setRegion] = useState();
  const [errorRegion, setErrorRegion] = useState();
  const [loadingRegion, setLoadingRegion] = useState(false);

  useEffect(() => {
    setLoadingRegion(true);
    fetch(`https://restcountries.com/v3.1/region/${regionName}`)
      .then((res) => res.json())
      .then((data) => setRegion(data))
      .catch((err) => setErrorRegion(err))
      .finally(() => setLoadingRegion(false));
  }, [regionName]);

  return [region, errorRegion, loadingRegion];
};
