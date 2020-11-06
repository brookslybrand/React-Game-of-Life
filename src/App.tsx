import * as React from 'react'

import Game from './Game'

import Controls from './Controls'
import { GameStateProvider } from './game-state'

function App() {
  // render the app and pass along the state and action functions
  return (
    <div className="h-screen p-6 font-sans antialiased bg-gray-100 ">
      <h1 className="text-4xl text-gray-800">John Conway's Game of Life</h1>
      <h2 className="text-gray-800 text-ls">Implemented using React</h2>
      <GameStateProvider>
        <div className="flex flex-col lg:flex lg:flex-row">
          <div className="flex flex-col">
            <Description />
            <Controls />
          </div>
          <Game className="m-0 lg:ml-8" />
        </div>
      </GameStateProvider>
    </div>
  )
}

// this is another component just to reduce some of the noise
function Description() {
  return (
    <div className="max-w-md p-4 mt-4 overflow-hidden rounded shadow-lg">
      <h3 className="text-xl font-bold">Rules of the Game:</h3>
      <p>
        An inactive (gray) cell will become active (yellow) in the next
        iteration, if and only if it has 3 active neighbors.
      </p>
      <p>
        An active cell will only survive if it has exactly 2 or 3 active
        neighbors (diagonals included). Otherwise it will die from
        underpopulation or overpopulation.
      </p>
      <p>Click on any cells you like to turn them active/inactive.</p>
    </div>
  )
}

export default App
