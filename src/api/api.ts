import { ENDPOINTS } from "./endpoints";
import { Product } from "./types";

// https://claude.site/artifacts/fc5422b0-0df6-4dee-8102-74a083d0c50c
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(ENDPOINTS.PRODUCTS);
  return response.json();
}
export async function fetchProduct(id:number):Promise<Product> {
    const response = await fetch(ENDPOINTS.PRODUCT(id))
    return response.json()
}
export async function fetchProductsByCategory(category:string):Promise<Product[]> {
    const response = await fetch(ENDPOINTS.CATEGORY(category))
    return response.json()
}
// export async function fetchUserCart(): {};
// export async function fetchUsers(): {};
