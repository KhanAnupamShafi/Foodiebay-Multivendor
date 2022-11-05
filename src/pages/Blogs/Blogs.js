import React from "react";
import Header from "../../layouts/Header/Header";
import Allproducts from "../../components/Products/Allproducts/Allproducts";


const Blogs = () => {
  return (
    <>
      <Header />
      
      <h2 className="text-2xl">Welcome to Blog page</h2>
      <Allproducts></Allproducts>
    </>
  );
};

export default Blogs;
