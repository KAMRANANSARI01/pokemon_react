import { Link } from 'react-router-dom'
function PokemonimgHeader (){
    return(
        <div className="mx-auto mt-[20px] flex justify-center items-center ">
        <Link to="/"> 
        <img className=" h-[150px] w-[300px] lg:h-[150px] lg:w-[470px] rounded  " src="./src/img.png" alt="logo" />
        {/* <h1 className='text-5xl text-zinc-100'>Pokemon</h1> */}
        </Link>
       
      </div>
    )
}
export default PokemonimgHeader;