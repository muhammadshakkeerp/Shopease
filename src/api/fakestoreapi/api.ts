import { ENDPOINTS } from "./endpoints";
import { Product } from "./types";

// https://claude.ai/chat/bde7c898-4f10-47c3-a823-f20f8b2b4448
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(ENDPOINTS.PRODUCTS);
  return response.json();
}
export async function fetchProduct(id: number): Promise<Product> {
  const response = await fetch(ENDPOINTS.PRODUCT(id));
  return response.json();
}
export async function fetchProductsByCategory(
  category: string
): Promise<Product[]> {
  const response = await fetch(ENDPOINTS.CATEGORY(category));
  return response.json();
}
// export async function fetchUserCart(): {};
// export async function fetchUsers(): {};
