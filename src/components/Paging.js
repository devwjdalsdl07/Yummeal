import React, { useState } from "react";
// import './Paging.css';

import Pagination from "react-js-pagination";
import { PaginationDiv } from "../style/MainCss";

const Paging = ({ onPageChange, bestProductAll }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = page => {
    setPage(page);
    onPageChange(page);

  };

  return (
    <PaginationDiv>
      <Pagination
        activePage={page}
        itemsCountPerPage={16}
        totalItemsCount={17}
        pageRangeDisplayed={bestProductAll.maxPage}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </PaginationDiv>
  );
};

export default Paging;
