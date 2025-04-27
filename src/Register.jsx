import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { useLocation } from "react-router-dom";

export default function Register() {
    const location = useLocation();
    const initialEmail = location.state?.email || '';
    
    const { register } = useAuth();
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const [confirm, setConfirm] = useState('');

    // Parola gücü state'i
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    });

    // Parola kontrolü
    const checkPasswordStrength = (password) => {
        setPasswordStrength({
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        });
    };

    // Password onChange handler'ını güncelle
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    // Form submission kontrolünü güncelle
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Parola geçerlilik kontrolü
        const isPasswordValid = Object.values(passwordStrength).every(value => value);
        
        if (!isPasswordValid) {
            setError('Lütfen parola gereksinimlerini karşılayın');
            return;
        }

        if (password !== confirm) {
            setError('Şifreler eşleşmiyor');
            return;
        }

        try {
            await register(fullname, username, email, password);
            window.location.href = '/';
        } catch (err) {
            setError('Kayıt başarısız: ' + err.response?.data?.message || err.message);
        }
    };

    // Render fonksiyonunda password input'undan sonra eklenecek kısım
    const PasswordChecklist = () => (
        <div className="mt-2 space-y-2 text-sm">
            <div className={`flex items-center space-x-2 ${passwordStrength.length ? 'text-green-500' : 'text-gray-400'}`}>
                <div className={`h-2 w-2 rounded-full ${passwordStrength.length ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span>En az 8 karakter</span>
            </div>
            <div className={`flex items-center space-x-2 ${passwordStrength.uppercase ? 'text-green-500' : 'text-gray-400'}`}>
                <div className={`h-2 w-2 rounded-full ${passwordStrength.uppercase ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span>En az 1 büyük harf</span>
            </div>
            <div className={`flex items-center space-x-2 ${passwordStrength.lowercase ? 'text-green-500' : 'text-gray-400'}`}>
                <div className={`h-2 w-2 rounded-full ${passwordStrength.lowercase ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span>En az 1 küçük harf</span>
            </div>
            <div className={`flex items-center space-x-2 ${passwordStrength.number ? 'text-green-500' : 'text-gray-400'}`}>
                <div className={`h-2 w-2 rounded-full ${passwordStrength.number ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span>En az 1 sayı</span>
            </div>
            <div className={`flex items-center space-x-2 ${passwordStrength.special ? 'text-green-500' : 'text-gray-400'}`}>
                <div className={`h-2 w-2 rounded-full ${passwordStrength.special ? 'bg-green-500' : 'bg-gray-400'}`} />
                <span>En az 1 özel karakter</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-purple-500/10">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Hesabını Oluştur
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Anime dünyasına hoş geldin!
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
                            <label htmlFor="fullname" className="sr-only">Ad Soyad</label>
                            <input
                                id="fullname"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border
                                         border-gray-700 bg-black/40 text-gray-200 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                         focus:border-purple-500 sm:text-sm"
                                placeholder="Ad Soyad"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="username" className="sr-only">Kullanıcı Adı</label>
                            <input
                                id="username"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border
                                         border-gray-700 bg-black/40 text-gray-200 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                         focus:border-purple-500 sm:text-sm"
                                placeholder="Kullanıcı Adı"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

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
                                onChange={handlePasswordChange}
                            />
                            <PasswordChecklist />
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Şifre (Tekrar)</label>
                            <input
                                id="confirm-password"
                                type="password"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border
                                         border-gray-700 bg-black/40 text-gray-200 rounded-lg
                                         focus:outline-none focus:ring-2 focus:ring-purple-500/40 
                                         focus:border-purple-500 sm:text-sm"
                                placeholder="Şifre (Tekrar)"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
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
                            Kayıt Ol
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
