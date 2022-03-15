//IMPORT REACT
import React from "react";

//IMPORT STYLES
import styles from "./filterselect.module.scss";

const FilterSelect = ({ onChangeHandler }) => {
  return (
    <div className={styles.filterselect__container}>
      <select name="region" id="region" onChange={(e) => onChangeHandler(e)}>
        <option value="default">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterSelect;
