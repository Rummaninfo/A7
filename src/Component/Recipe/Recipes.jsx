

const Recipes = ({props}) => {
   console.log(props)
    let {cover_img,recipe_name,short_description, ingredients,calories,preparing_time} = props
    return (
        <div>
 <div className="border-2	p-8 w-80">
<img className="w-60" src={cover_img} alt="" />
<h1>{recipe_name}</h1>
<p>{short_description}</p>
<hr className="mt-3 mb-3" />

<div>
<p>Ingredients : {ingredients.length} </p>
<ol className="">
<li>{ingredients[0]}</li>
<li>{ingredients[1]}</li>
<li>{ingredients[2]}</li>
<li>{ingredients[3]}</li>

</ol>

</div>
<hr className="mb-3 mt-3" />

<div className="flex gap-2">
    <p>{preparing_time}</p>
    <p>{calories}</p>
</div>
<div className="mt-3">
<button  className="bg-[#0BE58A] py-2 px-4 rounded-full">Went to cook</button>
</div>
 </div>




        </div>
    );
};

export default Recipes;