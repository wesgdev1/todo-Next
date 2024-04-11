// "use client"

import { getCookie, hasCookie, setCookie } from "cookies-next";

// ejemplo de cookie
// {
//   "uuid": 2, donde uuid es el id del producto y 2 es la cantidad
//   "product-2": 1,
export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie("cart")) {
    const cookieCart = JSON.parse((getCookie("cart") as string) ?? "{}");
    return cookieCart;
  }
  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
    // de esta manera si no existe el producto en el carrito, se agrega con cantidad 1
  }
  setCookie("cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    delete cookieCart[id];
    setCookie("cart", JSON.stringify(cookieCart));
  }
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) {
    cookieCart[id] -= 1;
    if (cookieCart[id] === 0) {
      delete cookieCart[id];
    }
    setCookie("cart", JSON.stringify(cookieCart));
  }
};
