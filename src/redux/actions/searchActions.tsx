export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS"

export const searchProducts = (query:string)=>({
type :SEARCH_PRODUCTS,
payload :{query}
});
