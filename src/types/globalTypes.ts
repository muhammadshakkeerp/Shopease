interface FetchProducts {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingProps;
}

interface RatingProps {
  rate: number;
  count: number;
}

interface ProductProps {
  id: number;
  title: string;
  thumbImg:string;
  img: string;
  price: number;
  offerAvailable: boolean;
  cart?: ProductProps[];
}

interface GraphProducts {
  data: unknown;
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

export type { FetchProducts, ProductProps, GraphProducts };
