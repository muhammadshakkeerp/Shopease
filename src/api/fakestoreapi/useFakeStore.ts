import { useEffect, useState } from "react";
import { Product } from "./types";

export function useFakeStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<String[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{

  },[])

  async function fetchAllProducts(){

  }
  async function fetchAllCategories({

  })

  async function fetchSingleProduct(id:number){

  }

  async function fetchProductsInCategory(category:string){
    
  }
}
