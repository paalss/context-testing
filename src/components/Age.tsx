import { memo, useContext } from "react"
import { Context } from "../context"
import { MemoizedAge } from "./MemoizedAge"

export const Age = memo(() => {
  const { data } = useContext(Context)
  console.log("Age run")
  return (
    <div>
      Age: {data.age}
      <MemoizedAge age={data.age} />
    </div>
  )
})
