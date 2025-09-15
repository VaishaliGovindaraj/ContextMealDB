'use client'
import { UserArray } from "@/data/users"
import { useState } from "react"
import { useUserContext } from "@/utils/contexts" 
import { UserContextType } from "@/utils/types"

const LogInForm = () => {
    const [userInput,setUserInput] = useState<string>('')
    const [userNotFound,setUserNotFound] = useState<boolean>(true)
   
    const {user,setUser} = useUserContext() as UserContextType
    
    const handleClick = (e : {preventDefault : ()=>void}) => {
        e.preventDefault()
        const loggedInUser = UserArray.filter(user => user.name === userInput)

        if(!loggedInUser[0]) setUserNotFound(false)
        else 
        setUserNotFound(true)  
        setUser(loggedInUser[0])
        
    }
    if(user) console.log("user is : " + user.name)

    const handleChange = (event: {target:{value:any}}) => {
        setUserInput(event.target.value)
    }

    return (
        <form className="flex flex-col ">
            <div className="max-w-[900px] m-auto bg-yellow-50 my-8 p-8 text-black rounded-2xl sm:p-2">
            <div className="flex ">
            <label htmlFor="username" className="m-2">Enter your username</label>
            <input onChange={handleChange} id="username" placeholder="Username" value={userInput} className="m-2 border-2 border-red-500 text-black"/>
            </div>
            <div className="flex">
            <label htmlFor="password" className="m-2">Enter your password</label>
            <input id="password" placeholder="password" className="m-2 border-2 border-red-500"/>
            </div>
            <button onClick={handleClick} className="border-2 border-red-500 bg-red-200 max-w-[100] flex justify-center mx-[100px] p-2">Log In !</button>
            </div>
          
            {!userNotFound && <p>User Not found</p>}
        </form>
    )
}

export default LogInForm