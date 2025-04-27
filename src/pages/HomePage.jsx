import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Navbar from "../Navbar";

export default function HomePage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        if (email.trim()) {
            navigate("/register", { state: { email } });
        } else {
            alert("Lütfen geçerli bir e-posta adresi girin.");
        }
    };

    return (
        <div className="h-screen homepage-bg bg-black/60 bg-blend-multiply rounded-md text-white">
            <div>
                <Navbar />
            </div>
            <div className="flex justify-center flex-col gap-10 items-center mt-32 px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Yüzlerce anime, HD kalitesinde, Türkçe altyazılı.
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                        Anime dünyasına adım atmak için hemen başlayın!
                    </p>
                </div>
                <form
                    onSubmit={handleStart}
                    className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl"
                >
                    <input
                        className="h-14 w-full md:w-[550px] p-4 focus:outline-none focus:ring-2 focus:ring-axa transition duration-300 border border-gray-600 bg-black/50 rounded-md text-white"
                        type="email"
                        placeholder="E-postanızı girin."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                    />
                    <button
                        type="submit"
                        className="secondary-color hover:bg-axa px-7 py-3 font-bold rounded-md transition duration-300"
                    >
                        BAŞLA!
                    </button>
                </form>
            </div>
        </div>
    );
}