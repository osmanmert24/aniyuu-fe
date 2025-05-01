import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaLanguage, FaDesktop, FaMobileAlt } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';
import Navbar from "../Navbar";

export default function HomePage() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setEmailError("E-posta adresi gereklidir");
            return;
        }
        navigate("/register", { state: { email } });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("");
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-screen">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/src/assets/bg/background4.jpg" 
                        className="w-full h-full object-cover"
                        alt="Hero background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#141414]"></div>
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-80px)] flex items-center">
                    <div className="max-w-3xl space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            Sınırsız Anime
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                Keyfi Başlasın
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300">
                            HD kalitede, Türkçe altyazılı en yeni animeler burada!
                        </p>

                        {/* Email Form */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300">
                                İzlemeye başlamak için hemen üye ol.
                            </p>
                            <form onSubmit={handleStart} className="flex flex-col gap-2">
                                <div className="w-full">
                                    <input
                                        type="email"
                                        placeholder="E-posta adresin"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={`w-full px-6 py-4 bg-black/60 border ${
                                            emailError ? 'border-red-500' : 'border-gray-600'
                                        } rounded text-white placeholder-gray-400 focus:border-purple-500
                                        focus:outline-none transition-colors duration-200`}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
                                             rounded text-white font-medium text-lg hover:from-purple-700 
                                             hover:to-pink-700 transition-colors flex items-center 
                                             justify-center gap-2 whitespace-nowrap sm:mt-0 mt-2"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Hemen Başla
                                </button>
                                {emailError && (
                                    <div className="mt-2 text-red-400 text-sm text-center">
                                        {emailError}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}