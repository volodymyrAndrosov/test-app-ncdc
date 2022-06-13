import React from "react";
import Tile from "../Tile/Tile";
import styles from "./TilesList.module.css";

const TilesList = props => {
  const { error, tilesData } = props;

  if (error || !tilesData?.length) return <div>Data is not fetched :(</div>;

  return (
    <div className={styles.TilesList}>
      {tilesData.map((tile, index) => {
        return <Tile key={index} tile={tile} />;
      })}
    </div>
  );
};

export default TilesList;
