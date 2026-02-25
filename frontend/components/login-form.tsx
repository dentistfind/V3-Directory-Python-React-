"use client"
import Image from "next/image";
import Input from "./ui/input";
import { useState } from "react";
import { LoginData } from "@/lib/interface";
import Button from "./ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginForm(){
    const [ loginInput, setLoginInput ] = useState<LoginData>({ email: "", password: "" })
    const [ showPassword, setShowPassword ] = useState(false)

    return(
        <div className="bg-white text-black relative flex-1">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-theme-light p-5 w-100 h-80 z-10 flex flex-col items-center justify-between gap-3 rounded-lg shadow">
                    <Image src="/dentistfind-logo.png" width={150} height={150} alt="DentistFind Logo" />
                    <Input 
                        value={loginInput.email} 
                        onChange={(e) => setLoginInput(prev => ({...prev, email: e.target.value }))} 
                        title="Email" placeholder="abc@example.com" type="email"
                    />
                    <div className="w-full relative">
                        <Input 
                            value={loginInput.password} 
                            onChange={(e) => setLoginInput(prev => ({...prev, password: e.target.value }))} 
                            title="Password" placeholder="XXXXXXXXX" type={showPassword ? "text" : "password"}
                        />
                        <div 
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <Button fill text="Log In" className="w-full text-center" />
                </div>
            </div>
        </div>
    )
}                                                                                                                                                                                                                                                               