'use client'

// import { API_ENDPOINT } from "@/data/endpoint"
import { useUserContext } from "@/utils/contexts"
import { RecipeDisplayType, UserContextType } from "@/utils/types"
import Link from "next/link"

const ProfilePage =  () => {
  const { user, setUser } = useUserContext() as UserContextType

return (
  <div className="min-h-screen flex flex-col items-center justify-start p-8">
    
    <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
      {user?.name}'s Profile
    </h2>

    
    {user?.favouriteCategory && (
      <div className="mb-8  bg-gray-700 text-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
        <p className="text-white font-bold text-lg mb-2">Favourite Category</p>
        <Link
          className="text-lg font-bold text-blue-200 hover:text-amber-400 transition"
          href={`/category/${user.favouriteCategory}`}
        >
          🍴 {user.favouriteCategory}
        </Link>
      </div>
    )}

    
    <div className="w-full max-w-lg bg-gray-700 shadow-md rounded-lg p-6 flex flex-col justify-center items-center">
      <h3 className="text-xl font-bold mb-4 text-white">Favourite Recipes</h3>

      {user && user.favouriteRecipes && user.favouriteRecipes.length > 0 ? (
        <ul className="space-y-2">
          {user.favouriteRecipes.map((recipe) => (
            <li
              key={recipe.id}
              className=" rounded-md p-2 text-lg font-bold text-blue-200 hover:text-amber-400 transition"
            >
              <Link
                href={`/${recipe.id}`}
                className="text-blue-300 hover:text-amber-400 transition"
              >
                {recipe.recipeName}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No favourite recipes yet.</p>
      )}
    </div>
  </div>
);
}

export default ProfilePage