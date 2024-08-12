'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ButtonEdit from '../components/botton/button';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('aluno');
    
    const router = useRouter();
    
    function criarUser() {
        // Lógica para criar o usuário
        // Aqui você pode fazer uma chamada à API para criar o usuário
        console.log({ name, email, password, accountType });
        // Redirecionar ou fazer outra ação após a criação
    }

    function voltar() {
        router.push('/login');
    }
    

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen text-white bg-gray-950">
            <div>
                <p>Nome:</p>
                <input
                    className="text-black p-1"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <p>E-mail:</p>
                <input
                    className="text-black p-1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <p>Senha:</p>
                <input
                    className="text-black p-1"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="flex flex-col">
                <p>Tipo de Conta:</p>
                <select
                    required
                    className="text-black"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                >
                    <option value="aluno">Aluno</option>
                    <option value="professor">Professor</option>
                    <option value="diretor">Diretor</option>
                </select>
            </div>
            <div className="flex gap-8 p-2 mt-6">
                
                <ButtonEdit text='Criar Usuário' onclickBTN={criarUser} />
                <ButtonEdit text='Voltar' onclickBTN={voltar} />
                
            </div>
        </div>
    );
}
