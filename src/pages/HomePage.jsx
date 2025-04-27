import "../styles/HomePage.css"
import Navbar from "../Navbar";
export default function HomePage () {


    return (
        
    <div className="h-screen homepage-bg bg-black/60 bg-blend-multiply rounded-md ">
        <div className="">
        <Navbar/>
        </div>
        <div className="flex justify-center items-center mt-96 ">
            <div>
                <h1>Yüzlerce Anime , HD Kalitesinde </h1>
            </div>
            <form action="">
                <input className="h-16 w-[550px] p-2 focus:outline-1 focus:outline-axa focus:border-axa transition duration-500 border-1 bg-black/50 rounded-sm border-black " type="text" placeholder="E-postanızı girin." id="email" />
                <button className="secondary-color hover:bg-axa px-7 py-1 ml-2 h-16 font-bold rounded-sm ">BAŞLA!</button>
            </form>
        </div>
    </div>
       
    )
}