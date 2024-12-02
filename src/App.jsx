
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import AddToCard from './Component/Card/AddToCard'
import Header from './Component/Header/Header'
import Recipe from './Component/Recipe/Recipe'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 


let [remaing, setRemaing] = useState([])


let handle = (e) =>{
let is = remaing.find(data => data.recipe_id== e.recipe_id)
if(!is){

let newdata = [...remaing, e]
setRemaing(newdata)

}else{  
toast.error('already added')

}
 
}





  return (
    <>
    <div className='w-[1120px] mx-auto mt-5'>
    <ToastContainer />
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
