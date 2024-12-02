import CardShow from "./CardShow";


const AddToCard = ({remaing}) => {
    // console.log(remaing,'add to card')
    let {preparing_time,calories,recipe_name} = remaing
    return (




        <div className="w-1/3 mt-16 border-2 p-4   h-96 ">

<h1 className="text-center">Went to cook {remaing.length}</h1>
          
           <div className="flex gap-3 justify-around mt-2">
            
            <h1>Name: </h1>
            <h1>Time</h1>
            <h1>Calories</h1>
          <button>d</button>
           </div>

           <div className="">
           

            {remaing.map(data => <CardShow data={data}></CardShow>)}
           </div>
        </div>
    );
};

export default AddToCard;