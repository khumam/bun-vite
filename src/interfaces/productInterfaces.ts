interface productInterface {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string
  images: string[]
}

interface postProductRequestInterface {
  title: string,
  description: string,
  price: number,
}

interface postProductResponseInterface {
  id: number,
  title: string,
  description: string,
  price: number,
}

interface getAllProductsInterface {
  products: productInterface[],
  total: number,
  skip: number,
  limit: number
}

export type {
  getAllProductsInterface,
  productInterface,
  postProductRequestInterface,
  postProductResponseInterface
}