"use client"
import { ReactNode, useState } from "react"
import { auth_data, IauthData } from "./context"
export const LoginProvider = ({children}:{children:ReactNode})=>{
    const [context, setContext] = useState<IauthData>({
        islogin:true,
        update:(props:IauthData) => {
            setContext(props)
    }
        }
    );
    return (
        <auth_data.Provider value={context}>
            {children}
        </auth_data.Provider>
    )
}
