import React from "react";
import styles from "./country.module.scss";

const Country = ({ country }) => {
  return (
    <div className={styles.country__container}>
      <img src={country.flags.svg} alt="flag" />
      <div className={styles.country_info__container}>
        <h3>{country.name.common}</h3>
        <p>
          <span>Population:</span> {country.population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
