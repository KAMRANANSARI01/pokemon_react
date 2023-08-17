import { Link } from 'react-router-dom'
function PokemonimgHeader (){
    return(
        <div className="mx-auto mt-[20px] flex justify-center items-center ">
        <Link to="/"> 
        <img className=" h-[80px] w-[300px] lg:h-[80px] lg:w-[370px] rounded bg-transparent opacity-70 mb-8 " src="https://adanc.org/wp-content/uploads/2018/08/pokemon-go-1000x600.jpg.webp" alt="logo" />
        {/* <img className=" h-[130px] w-[320px] lg:h-[130px] lg:w-[370px] rounded bg-transparent  mt-4 mb-8 " src="https://c4.wallpaperflare.com/wallpaper/827/674/341/pokemon-wallpaper-preview.jpg" alt="logo" /> */}
        </Link>
       
      </div>
    )
}
export default PokemonimgHeader;