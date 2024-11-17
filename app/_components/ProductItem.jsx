import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function ProductItem({ product }) {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-110 hover:shadow-md transition-all ease-in-out hover:bg-slate-200">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
        width={500}
        height={200}
        alt="image"
        className="h-[200px] w-[200px] object-contain"
      />
      <h1 className="font-bold">{product.name}</h1>
      <h1 className="font-bold">{product.mrp + " "}₹</h1>
      <Button
        className="text-primary hover:text-white hover:bg-primary"
        variant="outline"
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductItem;
