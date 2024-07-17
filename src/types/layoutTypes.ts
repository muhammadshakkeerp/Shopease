import { ProductProps } from "./productTypes";

type SubItem = {
  name: string;
  id: string;
};

export type SubCategory = {
  category: string;
  title: string;
  subItems: SubItem[];
};

type HeaderCategory = {
  title: string;
  img: string;
  subCategories: SubCategory[];
};

type headerCategoriesProps = HeaderCategory[];

type RowProductsProps = {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  offerAvailable: boolean;
}[];
type ProductDetailsProps = {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  offerAvailable: boolean;
  cart?:ProductProps[]
};
interface FooterDataItem {
  heading: string;
  content: string;
}

interface FooterDataProps {
  [section: string]: FooterDataItem;
}

export type {
  RowProductsProps,
  ProductDetailsProps,
  FooterDataProps,
  headerCategoriesProps,
  HeaderCategory,
};
