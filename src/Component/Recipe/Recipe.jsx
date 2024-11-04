import { useEffect, useState } from "react";
import Recipes from "./Recipes";
// import Recipes from "./Recipes";







const Recipe = () => {


 let [data, setData] = useState([])

useEffect(()=>{

fetch('blogs.json')
.then(data => data.json())
.then(data => setData(data))


},[])

    return (
        
        <div className="mt-10">
    
<div className="text-center space-y-3">

<h1 className="text-[#150B2B] text-3xl">Our Recipes</h1>
<p>A perfect recipe includes fresh, nutritious ingredients, a focus on balanced flavors, clear steps, and a touch of creativity. <br /> It results in a delicious, memorable meal that brings joy to those who share it.</p>
</div>
<div>
     <h1>ar: {data.length}</h1>  
    {data.map(items =><Recipes props={items}></Recipes>)}
     </div>
        </div>
    );
};

export default Recipe;