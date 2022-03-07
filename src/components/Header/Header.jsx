import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <h1>Where in the world?</h1>
      <div className={styles.theme__toggler}>
        <ion-icon name="moon-outline"></ion-icon> <span>Dark Mode</span>
        {/* <ion-icon name="moon"></ion-icon>Dark Mode */}
      </div>
    </div>
  );
};

export default Header;
