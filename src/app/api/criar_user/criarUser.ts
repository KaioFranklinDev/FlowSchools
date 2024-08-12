import { sql } from "@vercel/postgres";
export default async function ConferirUsers(){
    const query:any = await sql`SELECT * from users`; 
    return query.rows
}