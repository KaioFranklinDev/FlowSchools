export default async function Testa(){
    const getTest = await fetch('http://localhost:3000/api/jsonTest')
    const user = await getTest.json()


    return(
        <div>
            <p>{JSON.stringify(user)}</p>
            testa
        </div>
    )
}