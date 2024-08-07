"use client"
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
    function logoutHandler(){
        Cookies.remove('auth_token')
        router.push('/login')
    }
  return (
    <main className="h-screen  text-white gap-10  bg-gray-950 flex flex-col items-center justify-center" >
            <div>
                <Image alt="logo enpresa" src={"/img/logoQuality.jpg"} height={100} width={100} />
            </div>
            <div className="text-green-500">Disclaimer: Logado com sucesso!</div>
            <button onClick={logoutHandler}  className="text-black h-[50px] w-[100px] bg-yellow-500" >Sair</button>
    </main>
  );
}
