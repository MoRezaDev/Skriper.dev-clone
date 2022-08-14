import React, { useState } from "react";

import styles from "./PaginationTrend.module.css";

import arrowLeftIcon from "../../images/arrowLeftIcon.svg";
import arrowRightIcon from "../../images/arrowRightIcon.svg";

const PaginationTrend = ({ postsPerPage, totalPosts, paginate, current }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const lastPageNumber = pageNumbers[pageNumbers.length - 1];

  //   const NextPageHandler = () => {
  //     if (pageNumber <= lastPageNumber) {
  //       setPageNumber(pageNumber + 1);
  //       console.log(pageNumber);
  //       paginate(pageNumber + 1);
  //     }
  //   };
  //   const prevPageHandler = () => {
  //     if (pageNumber <= lastPageNumber && pageNumber > 0) {
  //       setPageNumber((prev) => prev - 1);
  //       paginate(pageNumber);
  //     }
  //   };

  return (
    <div className={styles.sliderNavigation}>
      <div className={styles.sliderNavItemsContainer}>
        {pageNumbers.map((number, idx) => (
          <div
            key={idx}
            className={styles.sliderNavItems}
            onClick={() => paginate(number)}
          >
            <span>{number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginationTrend;
