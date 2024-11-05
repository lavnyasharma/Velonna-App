import { ImageProps, ImageSourcePropType } from "react-native";

export interface StoreDTO {
  id: string
  name: string;
  verified: boolean
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
  id: string;
  name: string;
  price: string;
  image: string;
  store: StoreDTO
  liked: boolean;
  extraImages: ExtraImagesDTO[]
  review?: ReviewDTO;
  sizes?: SizeDTO[];
  description?: string;
  category?: CategoryDTO,
  createdAt?: string
}
