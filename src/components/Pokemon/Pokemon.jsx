import { Link } from "react-router-dom";

function Pokemon ({name,image ,id} ){
    return(
    
        
        <div className="text-center shadow-xl flex flex-col justify-center item-center rounded-lg  bg-transparent border-[1px] border-solid border-gray-400 duration-1000 ease-in-out hover:border-black">
            <Link to = {`/pokemon/${id}`}>
            <div><h5 className="mb-[10px] text-teal-600 font-medium ">{id}</h5></div>

            <div className="item-center max-w-full overflow-hidden">
                <img className="h-[100px] w-[100px] sm:max-w-full mx-auto hover:scale-110 duration-1000 " src={image} alt="img" />
            </div>
            
            <div className="border-[1px] rounded-lg rounded-t-none mt-5 bg-white"><h4 className="mt-[10px] mb-[5px] text-md font-sans font-medium uppercase lg:tracking-[.35em] tracking-[.2em] text-teal-600">{name}</h4></div>
            </Link>
        </div>
        
    
       
    )
}
export default Pokemon;