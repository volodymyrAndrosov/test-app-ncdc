import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.Text}>my awesome app</h1>
    </div>
  );
};

export default Header;
