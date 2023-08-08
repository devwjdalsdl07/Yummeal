import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const { state } = location;
  const product = state?.product;
  const fetchData = async () => {
    const res = await axios.get(`/api/Search?product=${product}`);
    const result = res.data;
    setSearchData(result);
    return result;
  };
  useEffect(() => {
    fetchData();
  }, [product]);
  console.log(searchData);
  return <div>Search</div>;
};

export default Search;
