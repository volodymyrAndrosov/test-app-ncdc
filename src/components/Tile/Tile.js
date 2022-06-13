import React from "react";
import styles from "./Tile.module.css";

const Tile = props => {
  const { name, picture, location } = props.tile;

  return (
    <div className={styles.Tile}>
      <img src={picture.large} className={styles.Image} alt={name.first} />
      <div className={styles.Text}>
        <span>{name.title}</span>. <span>{name.first}</span> <span>{name.last}</span>
      </div>
      <div>{location.country}</div>
    </div>
  );
};

export default Tile;
