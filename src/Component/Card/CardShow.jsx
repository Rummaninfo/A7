

const CardShow = ({data}) => {
    // console.log(data,' card show data')
    let {preparing_time, calories, recipe_name} = data
    return (
    
        <div className="flex justify-around gap-2 space-y-1 mt-2 items-center">
            
          <h1>{recipe_name.slice(0,10)}</h1> 
          <h1>{preparing_time} <br /> minutes </h1> 
          <h1>{calories} <br /> Calories </h1> 
         
          <div>
          <button>Preparing</button>
          </div>
        </div>
       
       
    );
};

export default CardShow;