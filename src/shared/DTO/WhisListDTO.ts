interface ImageDTO {
  id: string
  image: string
}
interface WishListDTO {
  id: string
  images: ImageDTO[]
  name: string
  itemsCount: string
}
