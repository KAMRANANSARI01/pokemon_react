import { useEffect, useState} from "react";
import axios from "axios";
// import "./pokemonlist.css"
import Pokemon from "../Pokemon/Pokemon";


function PokemonList(){

const[pokemonList,setPokemonList] = useState([]);
const[isloading,setIsloading]=useState(true)

const[pokeListUrl,setPokeListUrl]= useState('https://pokeapi.co/api/v2/pokemon')

// making state for getting next and previous 20 pokemon url
const[nextUrl,setNextUrl] = useState();
const[preUrl,setPreUrl] = useState();

async function downloadPokemon(){
  setIsloading(true)
  const responce = await axios.get(pokeListUrl ); //this download list of 20 pokemon
  // console.log(responce)
  const pokemonResults = responce.data.results; //array of 20 pokemon in which only name and url of 20 pokemon 

  // console.log( pokemonResults);
  setNextUrl(responce.data.next);
  // console.log(nextUrl)
  setPreUrl(responce.data.previous);
  // console.log(preUrl)

  const pokemonResultPromise= pokemonResults.map((ele)=>axios.get(ele.url));//iterates over the array of  pokemon and use url to creat an array of those 20 pokemons details
  const pokemonData = await axios.all(pokemonResultPromise);
  console.log(pokemonData)
//now we are iterating each pokemons id name and images
  const pokeListres = pokemonData.map((pokedata) => {
    const pokemons = pokedata.data;
    console.log(pokemons)
    return {
        id : pokemons.id,
        name : pokemons.name,
       image : (pokemons.sprites.other)? pokemons.sprites.other.dream_world.front_default:pokemons.sprites.front_shiny,
       types : pokemons.types
    }
  });
  console.log(pokeListres)
  setPokemonList(pokeListres)
  setIsloading(false)
}

      useEffect(()=>{
        downloadPokemon()
      },[pokeListUrl])
    return(
        
      <div>


        <div  className="mx-w-[1320px] mx-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 md:px-[70px]  px-[20px] ">
          
         {
          (isloading)?'loading......' : pokemonList.map((p)=><Pokemon name={p.name} image = {p.image} key={p.id}  id={p.id}/>)
         }
        </div>
        <div className="flex justify-center items-center gap-5 mb-[27px] mt-7">
          <button className="py-[8px] px-[20px] shadow-lg  w-[100px] border-[2px] text-gray-200 bg-transparent rounded-lg "   disabled={preUrl==null} onClick={()=>setPokeListUrl(preUrl )}>Previous</button>
          <button className="py-[8px] px-[20px] shadow-lg border-[2px] text-gray-200 w-[100px] rounded-lg"  disabled={nextUrl==null} onClick={()=>{
            setPokeListUrl(nextUrl)
          }} >Next</button>
        </div>
      </div>
    )
}
export default PokemonList;