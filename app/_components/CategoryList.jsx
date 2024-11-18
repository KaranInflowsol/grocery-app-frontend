import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList = [] }) {
  return (
    <div className="mt-5 w-full cursor-pointer">
      <h2 className="text-green-600 font-bold text-2xl">Shop by category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  pt-5">
        {categoryList.map((category, index) => (
          <Link
            href={"/products-category/" + category.name}
            key={index}
            className="flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-500"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                (category.icon[0]?.formats?.small?.url || category.icon[0]?.url)
              }
              height={50}
              width={50}
              alt="icon"
              className="hover:scale-105"
            />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
