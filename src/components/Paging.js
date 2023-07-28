import React, { useState } from "react";
// import './Paging.css';

import Pagination from "react-js-pagination";
import { PaginationDiv } from "../style/MainCss";

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = page => {
    setPage(page);
  };

  return (
    <PaginationDiv>
      <Pagination
        activePage={page}
        itemsCountPerPage={3}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </PaginationDiv>
  );
};

export default Paging;
