import "./darkmode.scss";
import React, { useState } from "react";

const DarkMode = () => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const switchTheme = () => {
    setToggleTheme(!toggleTheme);
    console.log(toggleTheme);
    if (toggleTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="theme__toggler" onClick={() => switchTheme()}>
      {toggleTheme ? (
        <ion-icon name="moon-outline"></ion-icon>
      ) : (
        <ion-icon name="moon"> </ion-icon>
      )}
      <span>Dark Mode</span>
    </div>
  );
};

export default DarkMode;
