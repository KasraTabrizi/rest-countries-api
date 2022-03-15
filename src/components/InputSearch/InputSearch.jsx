//IMPORT REACT
import React, { useState } from "react";

//IMPORT STYLES
import styles from "./inputsearch.module.scss";

const InputSearch = ({ onChangeHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
    onChangeHandler(e.target.value);
  };

  return (
    <div className={styles.inputsearch__container}>
      <ion-icon name="search"></ion-icon>
      <input
        type="text"
        value={searchInput}
        placeholder="Search for a country..."
        onChange={(value) => onChangeInput(value)}
      />
    </div>
  );
};

export default InputSearch;
