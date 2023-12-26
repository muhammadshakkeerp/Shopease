interface ProductProps {
  id: number;
  title: string;
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

export type { ProductProps ,GraphProducts};
