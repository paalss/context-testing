import { useContext } from "react"
import { Context } from "../context"

export const Name = () => {
  const { data } = useContext(Context)
  return (
    <div>
      Name: {data.name}
    </div>
  )
}
