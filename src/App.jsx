import './App.css'
import CreateRouter from './CreateRouter/CreateRouter'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
          <div className="mx-auto mt-[20px] flex justify-center items-center ">
            <Link to="/"> <img className=" h-[150px] w-[300px] lg:h-[150px] lg:w-[470px] rounded  " src="./src/assets/img.png" alt="logo" /></Link>
           
          </div>
         <CreateRouter/>
     
    </>
  )
}

export default App
