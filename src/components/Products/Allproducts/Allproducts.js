import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Allproducts = () => {
  const [allProducts, setAllproducts] = useState([]);
  useEffect(() => {
    fetch(
      'https://foodiebay-multivendor-server-production.up.railway.app/products'
    )
      .then((res) => res.json())
      .then((data) => setAllproducts(data));
  }, []);
  return (
    <div className="mt-9">
      <h2>All Products Page:{allProducts.length}</h2>
      <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        {allProducts.map((singlePro) => (
          <SingleProduct
            key={singlePro._id}
            singlePro={singlePro}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
