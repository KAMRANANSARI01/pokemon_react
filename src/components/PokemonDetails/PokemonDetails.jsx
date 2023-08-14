import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  // console.log(id)
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    setPokemon({
      id: response.data.id,
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
      abilities: response.data.abilities.map((a) => a.ability.name),
      stats1: response.data.stats.map((s) => s.stat.name),
      stats2: response.data.stats.map((s) => s.base_stat),
    });
  }
  useEffect(() => {
    downloadPokemon();
  }, []);
  return (
    <>
      <div className="flex justify-center bg-transparent items-center flex-col gap-4 border-[1px] border-solid border-gray-400 mx-auto md:max-w-[40%] sm:max-w-[60%] max-w-[80%] p-[20px] mb-[50px]  shadow-4xl rounded-lg ">
        <div className="font-bold text-slate-200 ">{pokemon.id}</div>
        <div className="text-md font-sans font-semibold  py-[2px] px-[8px]  bg-slate-500 text-slate-100 rounded-xl text-[20px] uppercase lg:tracking-[.35em] tracking-[.2em]">{pokemon.name}</div>
        <div>
          <img className="h-[240px] w-[240px] sm:max-w-full mx-auto hover:scale-110 duration-1000 " src={pokemon.image} alt="" />
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="border-[1px] rounded-lg px-[8px] py-[2px] opacity-80 bg-slate-300 font-medium">{`Height : ${pokemon.height}`}</div>
          <div className="border-[1px] rounded-lg px-[8px] py-[2px] opacity-80 bg-slate-300 font-medium" >{`Weight : ${pokemon.weight}`}</div>
        </div>

           <div><h2 className="text-xl pb-[2px] lg:px-[100px] md:px-[80px] sm:px-[80px] px-[60px] border-[1px] rounded-lg bg-slate-500 text-slate-100">Type</h2></div>
            <div className="flex gap-8 font-semibold"> {pokemon.types && pokemon.types.map((t) => <div key={t}> {t}</div>)}
            </div>
           
          
          <div><h2 className="text-xl py-[2px] lg:px-[100px] md:px-[80px] sm:px-[80px] px-[60px] border-[1px] rounded-lg bg-slate-500 text-slate-100">Abilities</h2></div>
          <div className="flex gap-8 font-semibold">
            {pokemon.abilities &&
              pokemon.abilities.map((t) => <div key={t}> {t}</div>)}

          </div>

        <div className="flex gap-[80px] border-[1px] rounded-lg px-[20px] py-[20px] opacity-60 bg-slate-300 ">
          <div className="text-black font-semibold ">
            {pokemon.stats1 &&
              pokemon.stats1.map((t) => <div key={t}> {t}</div>)}
          </div>
          <div className="text-black font-semibold">
            {pokemon.stats2 &&
              pokemon.stats2.map((t) => <div key={t}> {t}</div>)}
          </div>
        </div>
      </div>
    </>
  );
}
export default PokemonDetails;
