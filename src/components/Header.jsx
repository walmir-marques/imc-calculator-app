import React from "react";
import styles from "../app.module.css";
import imageLogo from "../assets/powered.png";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={imageLogo} alt="My App Logo" width={150} />
      </div>
    </header>
  );
};

export default Header;
