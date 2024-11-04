

const CardShow = ({data}) => {
    console.log(data,' card show data')
    let {preparing_time, calories, recipe_name} = data
    return (
    
        <div className="flex justify-around gap-2 space-y-1 mt-2">
            
          <h1>{recipe_name.slice(0,10)}</h1> 
          <h1>{calories}</h1> 
          <h1>{preparing_time}</h1> 
          <div>
            <button>e</button>
          </div>
        </div>
       
       
    );
};

export default CardShow;