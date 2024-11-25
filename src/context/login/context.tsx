"use client"
import { createContext } from "react";
export interface IauthData{
    islogin:boolean
    update?:(props:IauthData) => void
}
export const auth_data = createContext<IauthData | undefined>(undefined)