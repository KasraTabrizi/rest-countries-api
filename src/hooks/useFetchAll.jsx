import { useEffect, useState } from "react";

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
