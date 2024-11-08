import { ImageProps, ImageSourcePropType } from "react-native";

export interface StoreDTO {
  id: string
  name: string;
  category: boolean
  image: string
}
interface ExtraImagesDTO {
  id: string
  url: string
}
interface ReviewsDTO {
  id: string;
  user: any
  text: string
}
interface ReviewDTO {
  stars: number
  count: number
  reviews: ReviewsDTO[]
}
interface SizeDTO {
  name: number
}

interface CategoryDTO {
  id: string;
  name: string;
}
export interface ProductDTO {
  id: number;
  seller: string;
  category: number;
  collection: number;
  images: string[]; // Assuming an array of image URLs or paths
  uuid: string;
  created: string; // ISO date string, could use Date type if you prefer
  hsn: number;
  thumbnail: ImageSourcePropType | undefined;
  title: string;
  price: number;
  material: string;
  gender: string;
  age: string;
  is_live: boolean;
  quantity: number;
  size: string;
  description: string;
  gross_weight: number;
  net_weight: number;
  diamond_weight: number | null;
  stock_photo: string | null;
  kt: string;
  diamond_clearity: string;
  is_gold: boolean;
  is_diamond: boolean;
  for_counter: boolean;
}
