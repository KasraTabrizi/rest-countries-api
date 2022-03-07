import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <h1>Where in the world?</h1>
      <div className={styles.theme__toggler}>Dark Mode</div>
    </div>
  );
};

export default Header;
