// import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
// import css
import "./Pokedex.css"
function Pokedex ( ){
    return(
        <>

          <div className="pokedex-wrapper">
            <div className=" flex justify-center items-center mb-[40px]" ><h1 className=" lg:text-3xl md:text-2xl sm:text-xl tracking-[.35em] text-slate-200 font-semibold py-[2px] lg:px-[100px] border-[1px] md:px-[70px] sm:px-[70px] px-[20px] rounded-lg">POKEMON LIST</h1></div>
        {/* <Search/> */}
        <PokemonList/>
        </div>
        </>
     
    )
}
export default Pokedex;