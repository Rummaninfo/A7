import icon from "../../img/Frame 5.png"

const Header = () => {
    return (
        <div className="flex justify-between items-center">
           <div>
            <h1 className="text-3xl font-bold text-[#150B2B]">Recipe Calories</h1>
           </div>
 <div className="flex gap-3 text-sm text-[#150B2B]">
    <p>Home</p>
    <p>Recipes</p>
    <p>About</p>
    <p>Search</p>
 </div>
<div className="flex gap-2">
    <input type="text" placeholder="Search" className="text-center bg-[#D3CDE2] outline-none rounded-3xl py-0		"  />
    <img src={icon} alt="" />
</div>
        </div>
    );
};

export default Header;