import { Link,useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'


export default function Back(){
    const navigate = useNavigate()

    
    
    return(
        <>
        <Button color="secondary" style={{margin: 20}} onClick={()=>{
            navigate('/')
        }}
        variant="outlined">Home</Button>
        <Button color="secondary" onClick={()=>{
            navigate('../')
        }} variant="outlined">Back</Button>
        </>
    )
}