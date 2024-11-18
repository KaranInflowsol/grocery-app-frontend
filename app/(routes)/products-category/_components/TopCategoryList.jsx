import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopCategoryList({ categoryList }) {
  return (
    <div>
      <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
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

export default TopCategoryList;
