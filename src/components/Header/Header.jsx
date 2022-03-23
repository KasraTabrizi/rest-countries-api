import React from "react";
import DarkMode from "../../DarkMode";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <h1>Where in the world?</h1>
      <DarkMode />
    </div>
  );
};

export default Header;
