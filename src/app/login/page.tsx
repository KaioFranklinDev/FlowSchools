"use client"
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SendGridJS from "@/app/api/sendgrid/sandgrid";


export default function Page() {
    const router = useRouter()
    function loginHendler(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        Cookies.set('auth_token',"kaiokkkkate9")
        router.push('/')
    }

    async function handleSendGrid() {
        try {
          await SendGridJS({
            to: 'kaio.franklin.dev@gmail.com',
            subject: 'colocando no componente login',
            text: 'o pai é dev'
          });
          alert("E-mail enviado com sucesso!");
        } catch (error) {
          console.error("Erro ao enviar e-mail:", error);
        }
      }

    return (
        <main className="h-screen  text-white gap-10  bg-gray-950 flex flex-col items-center justify-center" >
            <div>
                <Image alt="logo enpresa" src={"/img/logoQuality.jpg"} height={100} width={100} />
            </div>
            <div className="text-green-500">Disclaimer: acesse com qualaquer usuario e senha</div>
            <form className="text-black gap-5  flex flex-col items-center justify-center">
                <div>
                    <p className=" text-white">Usuario</p>
                    <input className="p-1" type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <p className=" text-white">password</p>
                    <input className="p-1" type="password" name="password" placeholder="Password" required />
                </div>
                <button onClick={loginHendler} className="text-black h-[50px] w-[100px] bg-yellow-500" >Login</button>
            </form>
            <div>
                <div>
                    Primeira veza aqui?
                </div>
                <div>
                    Esqueceu a senha?
                </div>
            </div>
            <button onClick={handleSendGrid} >
                SENDGRD
            </button>
        </main>

    )
}