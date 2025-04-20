import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await login(email, password);
            window.location.href = '/';
        } catch(err) {
            setError(`Giriş başarısız: ${err.message || 'Bilinmeyen bir hata oluştu.'}`);
            console.error(`Giriş başarısız: ${err.message || 'Bilinmeyen bir hata oluştu.'}`);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white"> 
            <div className="border-bg px-44 py-64 rounded-lg ">
                <h2 className="text-center  font-bold text-gray-100">Giriş Yap</h2>
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">

                    <div className="flex gap-1 flex-col w-96">
                        <label className="px-2 py-1" htmlFor="email">E-posta</label>
                        <input 
                            type="email"
                            id="email" 
                            placeholder="E-posta adresinizi girin"
                            className="px-2 py-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex flex-col w-96 gap-1">
                        <label className="px-2 py-1" htmlFor="password">Şifre</label>
                        <input 
                            type="password"  
                            id="password" 
                            placeholder="Şifrenizi girin" 
                            className="px-2 py-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="text-center text-md px-8 py-2 mx-auto  hover:opacity-50  mt-5 rounded-lg  secondary-color">
                            Giriş yap!
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;