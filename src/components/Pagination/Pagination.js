import { usePagesHook } from "../../hooks/usePagesHook";
import styles from "./Pagination.module.css";
import * as paginationKeys from "../../consts/paginationKeys";

const Pagination = props => {
  const { perPage, currentPage, setCurrentPage } = props;
  const pagesCount = Math.ceil(paginationKeys.TOTAL_COUNT_VALUE / perPage);
  const pages = usePagesHook(pagesCount, currentPage);

  const onClick = item => {
    setCurrentPage(item);
  };

  const onPrev = () => {
    if (currentPage !== 1) {
      const updatedActivePage = currentPage - 1;
      setCurrentPage(updatedActivePage);
    }
  };

  const onNext = () => {
    const updatedActivePage = currentPage + 1;
    setCurrentPage(updatedActivePage);
  };

  return (
    <div className={styles.PaginationContainer}>
      <div onClick={onPrev}>Prev</div>
      {pages?.map((item, index) => {
        const isActive = currentPage === item;
        const className = isActive ? styles.ActivePageItem : styles.PaginationItem;

        return (
          <div key={index} className={className} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
      <div onClick={onNext}>Next</div>
    </div>
  );
};

export default Pagination;
