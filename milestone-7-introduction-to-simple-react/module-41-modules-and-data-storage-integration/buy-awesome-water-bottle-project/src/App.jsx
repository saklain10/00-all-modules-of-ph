import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'
import Bottle from './components/Bottle/bottle'
const bottlesPromise = fetch('./bottle.json').then(res=> res.json())

// const bottlesPromise2 = fetch("https://raw.githubusercontent.com/saklain10/bottles-data/refs/heads/main/bottles.js").then(res => res.json())
console.log(bottlesPromise)

function App() {
// const bottles =[
//   {id:1 ,name: 'Pink Nike Bottle', price:250, color:"pink"},
//   {id:1 ,name: 'Pink Nike Bottle', price:250, color:"pink"},
//   {id:1 ,name: 'Pink Nike Bottle', price:250, color:"pink"},
//   {id:1 ,name: 'Pink Nike Bottle', price:250, color:"pink"}
// ]

  return (
    <>
      
      <h1 className='color'>Buy awesome water bottle</h1>
      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlesPromise = {bottlesPromise}></Bottles>
      </Suspense>
     
    </>
  )
}

export default App
