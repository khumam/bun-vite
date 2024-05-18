import { getAllProductsInterface, postProductRequestInterface, postProductResponseInterface, productInterface } from "@/interfaces/productInterfaces"

export const getAllProducts = async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data: getAllProductsInterface = await res.json()

  return data
}

export const getProduct = async (productId: number) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  const data: productInterface = await res.json()

  return data
}

export const postProduct = async (product: postProductRequestInterface) => {
  const res = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: product.title,
      description: product.description,
      price: product.price,
    })
  })
  const data: postProductResponseInterface = await res.json()

  return data
}