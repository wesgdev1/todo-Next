import { Product, products } from "@/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito de Compras",
  description: "Página de carrito de compras",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productoInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((p) => p.id === id);
    if (product) {
      productoInCart.push({ product, quantity: cart[id] });
    }
  }
  return productoInCart;
};

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}");
  const productsInCart = getProductsInCart(cart);
  return (
    <div>
      <h1 className="text-3xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => {
            return (
              <ItemCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
