'use client';

import { useCartStore } from "@/store"
import { Product } from "@/typings/ProductTyings"
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

function AddToCart({product}: {product: Product}) {
    const [cart , addToCart] = useCartStore((state) => [
        state.cart,
        state.addToCart,
    ]);

    const howMantInCart = cart.filter(
        (item) => item.meta.sku === product.meta.sku
    ).length;

    const handleAdd = () => {
        console.log("Adding to  cart", product);
        addToCart(product);
    }

    if (howMantInCart > 0){
        return (
            <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howMantInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
            +
        </Button>
      </div>
        )
      
    }
  return <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>Add to Cart</Button>
}

export default AddToCart