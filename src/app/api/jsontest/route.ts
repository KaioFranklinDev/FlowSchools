// app/api/user/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // Permite todas as origens
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos

  try {
    // Fetch data from external API
    const response = await fetch('https://api.github.com/users/KaioFranklinDev');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return NextResponse.json(data, 
        
    );
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500, headers });
  }
}

export async function POST() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // Permite todas as origens
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos
  return NextResponse.json({ message: 'basoseira', triste: 'fim' }, { headers });
}

export async function OPTIONS() {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*'); // Permite todas as origens
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos

  return NextResponse.json({}, { headers });
}
