import { Suspense } from 'react'
import './App.css'
import Daisynav from './components/Daisynav/Daisynav'
import Navbar from './components/Navbar/Navbar'
import PricingOption from './components/PricingOption/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json())

function App() {

  return (
    <>

      <header>
        <Navbar></Navbar>
        {/* <Daisynav></Daisynav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>
}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
      <footer>

      </footer>

    </>
  )
}

export default App
