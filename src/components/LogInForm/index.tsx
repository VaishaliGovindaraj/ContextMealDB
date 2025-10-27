'use client'

import { UserArray } from "@/data/users"
import { useState } from "react"
import { useUserContext } from "@/utils/contexts"
import { UserContextType } from "@/utils/types"

const LogInForm = () => {
  const [userInput, setUserInput] = useState<string>("")
  const [userNotFound, setUserNotFound] = useState<boolean>(true)

  const { user, setUser } = useUserContext() as UserContextType

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault()
    const loggedInUser = UserArray.filter((user) => user.name === userInput)

    if (!loggedInUser[0]) setUserNotFound(false)
    else setUserNotFound(true)

    setUser(loggedInUser[0])
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-amber-200 to-orange-200 p-4">
      <div className="bg-white/30 w-full max-w-md backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-lg text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-md">
          Welcome to FlavorVault
        </h1>

        <form
          className="flex flex-col w-full space-y-4 text-left"
          onSubmit={handleClick}
        >
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm sm:text-base text-white"
            >
              Enter your username
            </label>
            <input
              onChange={handleChange}
              id="username"
              placeholder="Your Username"
              value={userInput}
              className="w-full p-3 rounded-xl border-2 border-amber-300 text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm sm:text-base text-white"
            >
              Enter your password
            </label>
            <input
              id="password"
              placeholder="Your Password"
              type="password"
              className="w-full p-3 rounded-xl border-2 border-amber-300 text-black focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-300 border-2 border-red-400 text-white font-semibold py-3 rounded-2xl transition-transform duration-200 hover:scale-105 hover:bg-red-400 hover:shadow-md active:scale-95"
          >
            Log In
          </button>
        </form>

        {!userNotFound && (
          <p className="mt-4 text-red-600 font-semibold">User not found</p>
        )}
      </div>
    </div>
  )
}

export default LogInForm
