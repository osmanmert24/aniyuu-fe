import { useState } from "react";


export default function Register () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    
    

    const handleSubmit =  async(e) => {
        e.preventDefault();
        try {
            
            const response = await fetch("https://api.aniyuu.com/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    hashedPassword: password,
                    fullname: fullname,
                    username: username
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Kayıt başarılı!", data);
            } else {
                console.error("Kayıt başarısız!", response.statusText);
            }
            
        } catch(error) {
            
                console.error("Kayıt başarısız!", error)
        }
    } 

    return (


        <div className="flex flex-col items-center justify-center min-h-screen text-white"> 
        <div className="border-bg px-44 py-64 rounded-lg ">
            <h2 className="text-center  font-bold text-gray-100">Giriş Yap</h2>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">

            <div className="flex flex-col w-96 gap-1">
                    <label className="px-2 py-1" htmlFor="password">Ad Soyad</label>
                    <input 
                        type="fullName"  
                        id="fullName" 
                        placeholder="Adınızı ve soyadınız giriniz." 
                        className="px-2 py-1"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-96 gap-1">
                    <label className="px-2 py-1" htmlFor="password">Kullanıcı Adı</label>
                    <input 
                        type="username"  
                        id="username" 
                        placeholder="Kullanıcı adınızı giriniz." 
                        className="px-2 py-1"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

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
                        Kaydol!
                </button>
            </form>
        </div>
    </div>
        
    )
}
