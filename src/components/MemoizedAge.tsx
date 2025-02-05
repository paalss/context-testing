import { memo } from "react"

export const MemoizedAge = memo(({ age }) => {
  console.log("Memoized Age run")
  return (
    <div>
      Memoized Age: {age}
    </div>
  )
})
