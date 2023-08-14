import React, { useState } from "react";
// import './Paging.css';

import Pagination from "react-js-pagination";
import { PaginationDiv } from "../style/MainCss";

const Paging = ({ onPageChange, pageRangeDisplayed, totalItemsCount }) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(pageRangeDisplayed);
  const [totalItemCount, setTotalItemCount] = useState(totalItemsCount);

  const handlePageChange = page => {
    setPage(page);
    onPageChange(page);
  };

  if (pageRangeDisplayed !== maxPage) {
    setMaxPage(pageRangeDisplayed);
  }

  if (totalItemsCount !== totalItemCount) {
    setTotalItemCount(totalItemsCount);
  }

  return (
    <PaginationDiv>
      <Pagination
        activePage={page}
        itemsCountPerPage={16}
        totalItemsCount={totalItemCount == 0 ? 1 : totalItemCount}
        pageRangeDisplayed={maxPage == 0 ? 1 : maxPage}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </PaginationDiv>
  );
};

export default Paging;
