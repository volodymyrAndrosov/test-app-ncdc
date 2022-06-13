import { useState, useEffect } from "react";
import TilesList from "../TilesList/TilesList";
import Loader from "../Loader/Loader";
import { fetchRandomUser } from "../../services/apiService";
import Pagination from "../Pagination/Pagination";
import Input from "../Input/Input";
import styles from "./Main.module.css";
import * as paginationKeys from "../../consts/paginationKeys";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);
  const [tiles, setTiles] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const isFetched = tiles || error;

  useEffect(() => {
    setCurrentPage(paginationKeys.PAGE_DEFAULT_VALUE);
  }, []);

  useEffect(() => {
    fetchRandomUser({
      setData: setTiles,
      result: paginationKeys.PER_PAGE_DEFAULT_VALUE,
      page: currentPage,
      setError,
      perPage: paginationKeys.PER_PAGE_DEFAULT_VALUE,
      filter: inputValue,
    });
  }, [currentPage, inputValue]);

  return (
    <div className={styles.Main}>
      <Input setInputValue={setInputValue} />
      {isFetched ? <TilesList error={error} tilesData={tiles} /> : <Loader />}
      <Pagination
        perPage={paginationKeys.PER_PAGE_DEFAULT_VALUE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Main;
