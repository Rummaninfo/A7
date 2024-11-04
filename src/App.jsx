
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import AddToCard from './Component/Card/AddToCard'
import Header from './Component/Header/Header'
import Recipe from './Component/Recipe/Recipe'

function App() {
 


let [remaing, setRemaing] = useState([])


let handle = (e) =>{
  let newData = [...remaing, e]
  setRemaing(newData)
}






  return (
    <>
    <div className='w-[1120px] mx-auto mt-5'>
    
      <Header></Header>
      
    <Banner></Banner>
<div className='flex gap-10'>
<Recipe handle={handle}></Recipe>

<AddToCard remaing={remaing}></AddToCard>

</div>





    </div>
     
    
      
     
    </>
  )
}

export default App
