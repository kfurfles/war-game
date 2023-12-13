import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBoard } from './core/board'
import { continents } from './base/continents'

function App() {
  const [count, setCount] = useState(0)
  const rows = 7
  const columns = 10

  const board = createBoard(columns,rows)
  continents.map(c => c.fillCounties(board))

  return (
    <>
      <div className={`grid gap-10 grid-cols-10 w-full`}>
        {board.map((row,i) => {
          return row.map((colum, j) => {
            const name = colum ? colum.name : ''
            const color = colum ? colum.color : ''
            console.log({ colum })
            return (<div key={`${i}-${j}`} className={`${color}  text-black border rounded-full flex items-center justify-center border-white h-28 w-28`}>
              {name}
            </div>)
          })
        })}
      </div>
    </>
  )
}

export default App
