import React from "react";
import styles from "./country.module.scss";

const Country = ({ country }) => {
  return (
    <div className={styles.country__container}>
      <img src={country.flags.svg} alt="flag" />
      <div className={styles.country_info__container}>
        <h3>{country.name.common}</h3>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
