import { useContext } from "react"
import { Context } from "../context"

export const Inputs = () => {
  const { data, setData } = useContext(Context)
  return (
    <>
      <label htmlFor="name">Name</label>{" "}
      <input value={data.name} onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} id="name" name="name" />
      <br />
      <label htmlFor="age">Age</label>{" "}
      <input type="number" value={data.age} onChange={e => setData(prev => ({ ...prev, age: e.target.value }))} id="age" name="age" />
      <hr />
    </>
  )
}
