import { useContext } from "react"
import { Context } from "../context"

export const Age = () => {
  const { data } = useContext(Context)
  console.log("Age run")
  return (
    <div>
      Age: {data.age}
    </div>
  )
}
