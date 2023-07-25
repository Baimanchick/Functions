import React, { useEffect, useState } from "react";
import "../css/card.css";
import { useProductContext } from "../context/ProductContext";
import { LIMIT } from "../utils/consts";
import { useSearchParams } from "react-router-dom";
import { Box, Grid, Pagination } from "@mui/material";
import { TfiSearch } from "react-icons/tfi";

function HomePage() {
  const { products, getProducts, pageTotalCount, deleteProduct } =
    useProductContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputVal, setInputVal] = useState(
    searchParams.get("title_like") || ""
  );
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: 1,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: 1,
      });
    }
    setPage(1);
  }, [inputVal, category]);

  useEffect(() => {
    if (category === "all") {
      setSearchParams({
        title_like: inputVal,
        _limit: LIMIT,
        _page: page,
      });
    } else {
      setSearchParams({
        title_like: inputVal,
        category: category,
        _limit: LIMIT,
        _page: page,
      });
    }
  }, [page]);

  useEffect(() => {
    if (pageTotalCount < page) {
      setPage(pageTotalCount);
    }
  }, [pageTotalCount]);

  return (
    <>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value={"japaneese"}>Japaneese</option>
        <option value={"all"}>All</option>
        <option value={"japaneesegirl"}>girl</option>
      </select>

      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        type="text"
        name="text"
        class="input"
        placeholder="Поиск"
      />

      <div className="wrapper">
        {products.map((item) => {
          return (
            <div className="container-card">
              <div className="product-img">
                <img src={`${item.image}`} height="420" width="327" />
              </div>
              <div className="product-info">
                <div className="product-text">
                  <h1>{item.title}</h1>
                  <h2>${item.price}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="product-price-btn">
                  <button className="buy" type="button">
                    details
                  </button>
                  <button
                    onClick={() => deleteProduct(item.id)}
                    className="delete"
                    type="button"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Box sx={{ maxWidth: "max-content", margin: "20px auto" }}>
        <Pagination
          onChange={(e, p) => setPage(p)}
          page={page}
          count={pageTotalCount}
          color="primary"
        />
      </Box>
    </>
  );
}

export default HomePage;
