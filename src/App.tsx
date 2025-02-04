import { useState } from 'react'
import './App.css'
import { Inputs } from './components/Inputs'
import { Context } from './context'
import { Name } from './components/Name'
import { Age } from './components/Age'

function App() {
  const [data, setData] = useState({
    name: "",
    age: ""
  })
  return (
    <>
      <h1>React context testing</h1>
      <div>
        <Context.Provider value={{
          data, setData
        }}>
          <Inputs />
          <Name />
          <Age />
        </Context.Provider>
      </div>
    </>
  )
}

export default App
