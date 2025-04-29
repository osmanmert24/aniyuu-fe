import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password);
            window.location.href = '/';
        } catch (err) {
            setError('Giriş başarısız: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-purple-500/10">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Giriş Yap
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Anime dünyasına geri dön!
                    </p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">E-posta</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border
                                         border-gray-700 bg-black/40 text-gray-200 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                         focus:border-purple-500 sm:text-sm"
                                placeholder="E-posta"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Şifre</label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border
                                         border-gray-700 bg-black/40 text-gray-200 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                         focus:border-purple-500 sm:text-sm"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border
                                     border-transparent text-sm font-medium rounded-lg text-white
                                     bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700
                                     hover:to-pink-700 focus:outline-none focus:ring-2 
                                     focus:ring-offset-2 focus:ring-purple-500 transition-all
                                     duration-200 ease-in-out transform hover:scale-[1.02]"
                        >
                            Giriş Yap
                        </button>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm text-gray-400">
                    Hesabınız yok mu?{" "}
                    <Link to="/register" className="text-purple-400 hover:underline">
                        Kayıt olun
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;