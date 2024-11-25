import { useContext } from "react"
import { auth_data } from "@/context/login/context"
export default function Header(){
    const data = useContext(auth_data)
    if(!data){
        return("Something wrong")
    };
    const handleUpdate = () => {
        if(data.update){
            data.update({islogin:false})
        }
    }
    console.log(data)
    return(
        <div>
            <h1>Header</h1>
            {data?.islogin && (<><p>Logged in</p></>)}
            {data?.islogin && (<><p>Logged false</p></>)}
            <button onClick ={handleUpdate}>Update Values</button>
            </div>
    )
}