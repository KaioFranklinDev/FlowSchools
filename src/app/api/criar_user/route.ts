import { NextResponse } from 'next/server';
import ConferirUsers from './criarUser';



export async function GET() {
  try { 
    const db:any = await ConferirUsers();
    return NextResponse.json(db);
  } catch (error) {
    console.error();
    return NextResponse.json('sucessppppppppppppppppaaao');
  }
}


