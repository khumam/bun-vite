import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface Props {
  error?: unknown,
  isLoading: boolean,
  title?: string,
  description?: string,
  children?: ReactNode
}

export default function CardLayout(props: Props) {
  return (
    <>
    <Card className="min-w-[800px]">
        <CardHeader>
          <CardTitle>{props?.title}</CardTitle>
          <CardDescription>{props?.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {props.error ? (<p className="text-red-500">Error</p>) : null}
          {props.isLoading ? (<p>Loading something special...</p>) : null}
          {props.children}
        </CardContent>
      </Card>
    </>
  )
}