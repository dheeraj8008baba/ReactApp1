import React, { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const pro = [
    { name: "Mobile", Price: 23000 },
    { name: "Laptop", Price: 53000 },
  ];
  return (<div>
    <div className="products">
        {}
    </div>
  </div>);
}
