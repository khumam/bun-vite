import { postProduct } from "@/api/product";
import CardLayout from "@/components/layout/CardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { postProductRequestInterface } from "@/interfaces/productInterfaces";
import { ChangeEvent, useState } from "react";
import { useMutation } from "react-query";

export default function Post() {
  const [state, setState] = useState<postProductRequestInterface>({
    title: '',
    description: '',
    price: 0
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = useMutation(postProduct)

  return (
    <>
      <div className="w-screen p-12">
        <div className="flex justify-center items-center h-full">
          <CardLayout isLoading={false} title="Post product" description="Post product detail">
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" name="title" placeholder="Title" onChange={(e) => handleChange(e)} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
              <Label htmlFor="description">Description</Label>
              <Input type="text" id="description" name="description" placeholder="Description" onChange={(e) => handleChange(e)} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
              <Label htmlFor="price">Price</Label>
              <Input type="number" id="price" name="price" placeholder="Price" onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={async () => handleSubmit.mutateAsync(state)} disabled={handleSubmit.isLoading}>
                {handleSubmit.isLoading ? 'Posting...' : 'Submit post'}
              </Button>
              <p>{ handleSubmit.isSuccess ? 'Data has been posted' : null }</p>
              <p className="text-red-500">{ handleSubmit.isError ? 'Failed to post data' : null }</p>
            </div>
          </CardLayout>
        </div>
      </div>
    </>
  );
}