import {Suspense} from 'react'
import './App.css'
import type { PlantType } from './types'
import Plants from './components/Plants/Plants'
import { getAllPlants } from './api/plants'

const plantsPromise: Promise<PlantType[]> = getAllPlants();


function App() {
  return (
    <Suspense fallback="Loading...">
      <Plants plantsPromise={plantsPromise} />
    </Suspense>
  )
}

export default App
