import { getAllProducts } from "@/api/product"
import CardLayout from "@/components/layout/CardLayout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import { productInterface } from "@/interfaces/productInterfaces"
import { useState } from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

interface Product {
  id: number,
  name: string,
  price: number
}

interface SelectedProducts {
  products: Product[],
  total: number,
  totalPrice: number
}

export default function Home() {
  const { data, error, isLoading } = useQuery('products', getAllProducts)
  const [state, setState] = useState<SelectedProducts>({
    products: [],
    total: 0,
    totalPrice: 0
  })

  const handleAddToCart = (item: productInterface) => {
    const product: Product = {
      id: item.id,
      name: item.title,
      price: item.price
    }

    setState((prev) => {
      return {
        ...prev,
        products: [...prev.products, product],
        total: prev.total + 1,
        totalPrice: prev.totalPrice + product.price
      }
    })
  }

  const handleRemoveCart = (item: productInterface) => {
    setState((prev) => {
      return {
        ...prev,
        products: prev.products.filter((product) => product.id !== item.id),
        total: prev.total - 1,
        totalPrice: prev.totalPrice - item.price
      }
    })
  }
  
  return (
    <>
      <div className="w-screen p-12">
        <div className="flex justify-center items-start h-full gap-4">
          <CardLayout error={error} isLoading={isLoading} title="List Products" description="List user products">
            <div>
                <Accordion type="single" collapsible>
                  {
                    data?.products?.map((item) => (
                      <AccordionItem value={item.title} key={item.id}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <p>{item.description}</p>
                          <p className="font-bold mb-4">Price: USD{item.price}</p>
                          <div className="flex gap-2">
                            <Link to={`/product/${item.id}`} className={buttonVariants({ variant: "outline" })}>Detail product</Link>
                            {
                              state.products.find((product) => product.id === item.id)
                                ? (<Button onClick={() => handleRemoveCart(item)}>Remove from cart</Button>)
                                : (<Button onClick={() => handleAddToCart(item)}>Add to cart</Button>)
                            }
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  }
                </Accordion>
              </div>
          </CardLayout>
          <CardLayout error={error} isLoading={false} title="Cart" description="Your cart">
            {
              state.products?.map((item) => (<p key={item.id}>{item.name}</p>))
            }
            <div className="mt-4">
              <h4 className="font-bold text-md">Total product: {state.total}</h4>
              <h4 className="font-bold text-xl">Total price: USD{state.totalPrice}</h4>
            </div>
          </CardLayout>
        </div>
      </div>
    </>
  )
}