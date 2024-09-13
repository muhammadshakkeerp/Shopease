const BASE_URL = "https://fakestoreapi.com";

export const ENDPOINTS = {
  PRODUCTS: ` ${BASE_URL}/products`,
  PRODUCT: (id: number) => `${BASE_URL}/products/${id}`,
  CATEGORY: (category: string) => `${BASE_URL}/products/category/${category}`,
  CATEGORIES: `${BASE_URL}/products/categories`,
  CART: `${BASE_URL}/carts`,
  USER_CART: (userId: number) => `${BASE_URL}/carts/user/${userId}`,
  USERS: `${BASE_URL}/users`,
  USER: (id: number) => `${BASE_URL}/users/${id}`,
};
