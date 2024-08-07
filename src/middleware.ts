import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value
  if(!token){
    if(request.nextUrl.pathname === '/login'){
      return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if(request.nextUrl.pathname === '/login'){
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [ '/login/:path*', '/' ]
}