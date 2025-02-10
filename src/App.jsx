import React from 'react'
import Landing from './components/Landing'
import Product from './components/Product'
import data from './components/data.json'

function App() {
  return (
    <>

    <div className='flex flex-wrap gap-2.5 p-14 justify-center'>


    {
      data.map(function(productdata,index){
        return <Product product={productdata}/>
      })
    }
    </div>

    {/* <Product/> */}

    {/* <Landing/> */}
    </>
  )
}

export default App