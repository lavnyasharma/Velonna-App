import { ProductDTO, StoreDTO } from "@/shared/DTO/ProductDTO";
import { BrandDTO } from "@/shared/DTO/BrandDTO";
import { Adidas, Apple, Levis, Msi, Nike, Nvidia, Puma, Zara } from "@/shared/assets/brands";

export const products: ProductDTO[] = [
  {
    "createdAt": "2023-05-25T02:46:25.016Z",
    "name": "Nike Air More Uptempo '96",
    "price": "169.81",
    "image": "https://i.ibb.co/K5mD2tQ/shoe1.png",
    "store": {
      "id": "1",
      "name": "Nike",
      "verified": true,
      image: "",
    },
    "liked": false,
    "id": "1",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/K5mD2tQ/shoe1.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  },
  {
    "createdAt": "2023-05-25T18:32:00.524Z",
    "name": "Nike Air Force 1 '07 Premium",
    "price": "121.46",
    "image": "https://i.ibb.co/f4HQYZ4/shoes2.png",
    "store": {
      "id": "1",
      "name": "Nike",
      "verified": true,
      image: "",
    },
    "liked": false,
    "id": "2",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/K5mD2tQ/shoe1.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  },
  {
    "createdAt": "2023-05-25T15:27:38.062Z",
    "name": "Nike Air Max Terrascape 97",
    "price": "190.17",
    "image": "https://i.ibb.co/PQpWhmG/shoes3.png",
    "store": {
      "id": "1",
      "name": "Nike",
      image: "",
      "verified": true
    },
    "liked": false,
    "id": "3",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/K5mD2tQ/shoe1.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  },
  {
    "createdAt": "2023-05-25T03:43:16.497Z",
    "name": "Air Jordan 1 Retro High OG",
    "price": "169.81",
    "image": "https://i.ibb.co/Njj46ZD/shoes4.png",
    "store": {
      "id": "1",
      "name": "Nike",
      "verified": true,
      image: "",
    },
    "liked": false,
    "id": "4",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/K5mD2tQ/shoe1.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  },
  {
    "createdAt": "2023-05-25T23:18:41.214Z",
    "name": "Nike Offcourt",
    "price": "69.81",
    "image": "https://i.ibb.co/8sJ3CGS/shoes5.png",
    "store": {
      "id": "1",
      "name": "Nike",
      "verified": true,
      image: ""
    },
    "liked": false,
    "id": "5",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/K5mD2tQ/shoe1.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  },
  {
    "createdAt": "2023-05-25T11:22:13.822Z",
    "name": "Nike Victori One",
    "price": "60.32",
    "image": "https://i.ibb.co/ZHQH0Y9/shoes.png",
    "store": {
      image: "",
      "id": "1",
      "name": "Nike",
      "verified": true
    },
    "liked": false,
    "id": "6",
    extraImages: [
      {
        id: '1',
        url: 'https://i.ibb.co/ZHQH0Y9/shoes.png'
      },
      {
        id: '2',
        url: 'https://i.ibb.co/q5wZ398/shoes1-2.png'
      },
      {
        id: '3',
        url: 'https://i.ibb.co/f9bLvq8/shoe1-3.png'
      },
      {
        id: '4',
        url: 'https://i.ibb.co/KrLxydw/shoes1-4.png'
      },
    ]
  }
]
export const sortByDefault = [
  {
    id: '1',
    label: 'A-Z',
    active: false
  },
  {
    id: '2',
    label: 'Lowest Price',
    active: false
  },
  {
    id: '3',
    label: 'Most Popular',
    active: true
  },
  {
    id: '4',
    label: 'Highest Price',
    active: false
  },
  {
    id: '5',
    label: 'Newest',
    active: false
  },
  {
    id: '6',
    label: 'Most Suitable',
    active: false
  },
]
export const categoriesDefault = [
  {
    id: '1',
    label: 'All Categories',
    active: false
  },
  {
    id: '2',
    label: 'Pants',
    active: true
  },
  {
    id: '3',
    label: 'Basketball',
    active: false
  },
  {
    id: '4',
    label: 'Apparel',
    active: false
  },
  {
    id: '5',
    label: 'Life Style',
    active: false
  },
  {
    id: '6',
    label: 'Sandals',
    active: false
  },
]
export const brands = [
  {
    id: '1',
    logo: Adidas,
    name: 'Addidas',
  },
  {
    id: '2',
    logo: Apple,
    name: 'Apple',
  },
  {
    id: '3',
    logo: Levis,
    name: 'Levis',
  },
  {
    id: '4',
    logo: Msi,
    name: 'Msi',
  },
  {
    id: '5',
    logo: Nike,
    name: 'Nike',
  },
  {
    id: '6',
    logo: Nvidia,
    name: 'Nvidia',
  },
  {
    id: '7',
    logo: Puma,
    name: 'Puma',
  },
  {
    id: '8',
    logo: Zara,
    name: 'Zara',
  },
]
export const sizes = [
  {
    id: '1',
    value: '40',
    active: false,
    disabled: false
  },
  {
    id: '2',
    value: '41',
    active: false,
    disabled: false
  },
  {
    id: '3',
    value: '42',
    active: false,
    disabled: false
  },
  {
    id: '4',
    value: '43',
    active: true,
    disabled: false
  },
  {
    id: '5',
    value: '44',
    active: false,
    disabled: false
  },
  {
    id: '6',
    value: '45',
    active: false,
    disabled: true
  },
  {
    id: '7',
    value: '46',
    active: false,
    disabled: true
  }
]
export const wishList= [
  {
    id: '1',
    images: [
      {
        id: '1',
        image: 'https://i.ibb.co/W61417M/Rectangle-2597.png'
      },
      {
        id: '2',
        image: 'https://i.ibb.co/Sn0rYLz/Rectangle-2599.png'
      },
      {
        id: '3',
        image: 'https://i.ibb.co/ChqDDKv/Rectangle-2598.png'
      },
      {
        id: '4',
        image: 'https://i.ibb.co/HxZsk8S/Rectangle-2597-1.png'
      },
    ],
    name: 'Nike Wishlists',
    itemsCount: '12'
  },
  {
    id: '2',
    images: [
      {
        id: '1',
        image: 'https://i.ibb.co/wch5srN/Rectangle-2597-2.png'
      },
      {
        id: '2',
        image: 'https://i.ibb.co/HN4C6kd/Rectangle-2597-3.png'
      },
      {
        id: '3',
        image: 'https://i.ibb.co/3YMtCN8/Rectangle-2598-1.png'
      },
      {
        id: '4',
        image: 'https://i.ibb.co/XXrR3M6/Rectangle-2599-1.png'
      },
    ],
    name: 'Adidas Wishlists',
    itemsCount: '8'
  },
  {
    id: '3',
    images: [
      {
        id: '1',
        image: 'https://i.ibb.co/sJgGttj/Rectangle-2597-4.png'
      },
      {
        id: '2',
        image: 'https://i.ibb.co/rfR2Q6W/Rectangle-2597-5.png'
      },
      {
        id: '3',
        image: 'https://i.ibb.co/pKkmscZ/Rectangle-2598-2.png'
      },
      {
        id: '4',
        image: 'https://i.ibb.co/Ld5RHyQ/Rectangle-2599-2.png'
      },
    ],
    name: "Audio's",
    itemsCount: '5'
  },
]
export const stores: StoreDTO[] = [
  {
    "id": "1",
    "name": "NIKE",
    "verified": true,
    "image": Nike,
  },
  {
    "id": "2",
    "name": "Adidas",
    "verified": true,
    "image": Adidas,
  },
  {
    "id": "3",
    "name": "Zara",
    "verified": true,
    "image": Zara,
  },
  {
    "id": "4",
    "name": "Puma",
    "verified": true,
    "image": Puma,
  },
]
export const categories = [
  {
    id: '1',
    name: 'All',
    active: false
  },
  {
    id: '2',
    name: 'Sport',
    active: false
  },
  {
    id: '3',
    name: 'Fashion',
    active: true
  },
  {
    id: '4',
    name: 'Electronics',
    active: false
  },
  {
    id: '5',
    name: 'Life Style',
    active: false
  },
]
export const zara = [
  {
    id: '1',
    image: 'https://i.ibb.co/qn7XZjM/image-47.png',
  },
  {
    id: '2',
    image: 'https://i.ibb.co/M5T8YJD/image-48.png',
  },
  {
    id: '3',
    image: 'https://i.ibb.co/nmgnck5/image-46.png',
  },
]
export const levis = [
  {
    id: '1',
    image: 'https://i.ibb.co/KNwx8nq/image-47-1.png',
  },
  {
    id: '2',
    image: 'https://i.ibb.co/5vkH8PP/image-48-1.png',
  },
  {
    id: '3',
    image: 'https://i.ibb.co/728fNqt/image-46-1.png',
  },
]
