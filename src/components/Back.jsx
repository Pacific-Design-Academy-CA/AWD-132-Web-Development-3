import { Link } from "react-router-dom"

export default function Back(){
    return(
        <>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={'../'}>Back</Link></button> 
        </>
    )
}