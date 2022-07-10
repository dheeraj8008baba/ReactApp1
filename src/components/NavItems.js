import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import Category from "./Category";

export default function NavItems() {
  const [categories, setCategories] = useState([]);
  const { data, isLoading, loadError } = useApi(
    `https://fakestoreapi.com/products/categories/`
  );

  useEffect(() => {
    data.unshift("All Category");
    setCategories([...data]);
  }, [data]);

  return (
    <div className="header-items">
      {data.map((category, i) => {
        return <Category category={category} key={`${category}_` + i} />;
      })}
    </div>
  );
}
