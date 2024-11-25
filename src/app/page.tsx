"use client"
import Image from "next/image";
import Header from "@/component/header";
import { LoginProvider } from "@/context/login/login";
export default function Home() {
  return (
   <>
   <LoginProvider>
    <Header/>
   </LoginProvider>
   </> 
  );
}
