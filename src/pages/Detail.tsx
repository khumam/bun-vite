import { getProduct } from "@/api/product";
import CardLayout from "@/components/layout/CardLayout";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams()
  const { isLoading, data, error } = useQuery(['detail', id], () => getProduct(id as unknown as number))

  return (
    <>
    <div className="w-screen p-12">
        <div className="flex justify-center items-center h-full">
          <CardLayout error={error} isLoading={isLoading} title={data?.title} description={data?.description}></CardLayout>
        </div>
      </div>
    </>
  )
}