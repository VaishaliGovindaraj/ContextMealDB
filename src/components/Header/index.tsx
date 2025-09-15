'use client'

import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"
import logo from '../../../public/logo.jpg'
import Image from "next/image"

const Header = () => {
   
    const {user,setUser} = useUserContext() as UserContextType
    
    const handleLogOut = () => {
        setUser(null)
    }


    return (

        <header className="shadow-md">
  <div className="max-w-6xl mx-auto flex flex-row items-center justify-between p-4">
    
    <div className="flex items-center gap-3">
      <img
        src="/new_logo.png"
        alt="logo"
        className="hidden sm:block sm:w-20 sm:h-20 object-contain"
      />
      <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
        My Recipes
      </h1>
    </div>

    
    {user && (
      <button
        onClick={handleLogOut}
        className="mt-3 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-full shadow transition"
      >
        Log Out
      </button>
    )}
  </div>
</header>


    )
}

export default Header