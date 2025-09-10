'use client'
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"
import logo from '../../../public/logo.jpg'
import Image from "next/image"

const Header = () => {
   
    return (
        <header className="text-center p-4 bg-amber-200 flex items-center justify-center">
            <Image src={logo} alt="logo" width="150" height="150" />
            <h1 className="text-2xl font-bold text-black">My recipes</h1>
            
        </header>
    )
    
}

export default Header