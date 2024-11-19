import React from "react";
import TopCategoryList from "../_components/TopCategoryList";
import GlobalApi from "@/app/_utils/GlobalApi";
import ProductList from "@/app/_components/ProductList";

async function ProuductCategory({ params }) {
  const { categoryName } = params;

  const categoryList = await GlobalApi.getCategoryList();

  const productList = await GlobalApi.getProductsByCategory({ categoryName });

  return (
    <div>
      <h2 className="p-4 bg-primary text-white font-bold  text-3xl text-center">
        {categoryName}
      </h2>
      <TopCategoryList categoryList={categoryList} />
      <ProductList productList={productList} />
    </div>
  );
}

export default ProuductCategory;
