"use client"
import Header from "@/components/header";
import RegisterComplete from "@/components/register-complete";
import RegisterOfficeForm1 from "@/components/register-office-form1";
import RegisterOfficeForm2 from "@/components/register-office-form2";
import { useState } from "react";

export default function RegisterPage(){
    const [ componentPage, setComponentPage ] = useState<0 | 1>(0)
    
    return(
        <div>
            <Header authPage />
            {/* {componentPage === 0 ? 
                <RegisterOfficeForm1 setComponentPage={setComponentPage} /> : 
                <RegisterOfficeForm2 setComponentPage={setComponentPage} />
            } */}
            <RegisterComplete />
        </div>
    )
}