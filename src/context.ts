import { Dispatch, SetStateAction, createContext } from "react";

interface Data { name: string, age: string }

interface ContextProps {
  data: Data;
  setData: Dispatch<SetStateAction<Data>>
}

export const Context = createContext<ContextProps>({
  data: {
    name: '',
    age: ''
  },
  setData: () => null
})
