import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetails from "./ProductItemDetails";

function ProductItem({ product }) {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-110 hover:shadow-md transition-all ease-in-out">
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.images[0]?.url}
        width={500}
        height={200}
        alt="image"
        className="h-[200px] w-[200px] object-contain"
      />
      <h1 className="font-bold">{product.name}</h1>
      <h1 className="font-bold">{product.mrp + " "}₹</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-primary hover:text-white hover:bg-primary"
            variant="outline"
          >
            Add to cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <ProductItemDetails product={product} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItem;
