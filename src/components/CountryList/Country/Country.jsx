import React from "react";
import styles from "./country.module.scss";

const Country = ({ country, onClickHandler, expandCountryInfo }) => {
  console.log(country);

  return (
    <div
      className={
        expandCountryInfo
          ? styles.country_expand__container
          : styles.country__container
      }
      onClick={() => onClickHandler(country.name.common)}
    >
      <img src={country.flags.svg} alt="flag" />
      <div className={styles.country_info__container}>
        <h3>{country.name.common}</h3>

        <div className={styles.desktop_info__container}>
          <div>
            {expandCountryInfo && (
              <p>
                <span>Native Name: </span>
                {country.name.nativeName &&
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[
                      Object.keys(country.name.nativeName).length - 1
                    ]
                  ].common}
              </p>
            )}
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            {expandCountryInfo && (
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
            )}
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
          {expandCountryInfo && (
            <div className={styles.expanded_info__container}>
              <p>
                <span>Top Level Domain:</span> {country.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currencies &&
                  country.currencies[
                    Object.keys(country.currencies)[
                      Object.keys(country.currencies).length - 1
                    ]
                  ].name}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages &&
                  Object.keys(country.languages).map((lang, index) => {
                    return `${country.languages[lang]}${
                      index < Object.keys(country.languages).length - 1
                        ? ", "
                        : ""
                    }`;
                  })}
              </p>
            </div>
          )}
        </div>

        {expandCountryInfo && (
          <div className={styles.expanded_info__container}>
            <h4>Border Countries: </h4>
            <div className={styles.borders__container}>
              {country.borders &&
                country.borders.map((country) => {
                  return (
                    <div className={styles.border_country__container}>
                      {country}
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
