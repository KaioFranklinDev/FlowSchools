'use client'
interface ButtonEditProps{
    onclickBTN:any
    text:string
}
export default function ButtonEdit(props:ButtonEditProps){
    return(
        <button className="bg-green-900 p-1" onClick={props.onclickBTN}>{props.text}</button>
    )
}