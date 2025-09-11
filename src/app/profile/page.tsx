'use client'

// import { API_ENDPOINT } from "@/data/endpoint"
import { useUserContext } from "@/utils/contexts"
import { RecipeDisplayType, UserContextType } from "@/utils/types"
import Link from "next/link"

const ProfilePage = async () => {
        const {user,setUser} = useUserContext() as UserContextType

    return (
        <>
        <p>Profile page</p>
         <h2 className="text-2xl font-bold mb-4">{user?.name}'s Profile</h2>
        { user?.favouriteCategory &&
         <Link className="text-white font-semibold text-center mb-2" href={`/category/${user.favouriteCategory}`}> Click to view the recipies of :<strong>{user.favouriteCategory}</strong></Link>}
             <p>RecipeDetailPage</p>

         {user && user.favouriteRecipes && user.favouriteRecipes.length > 0 ? (
        <div>
          <h3 className="text-xl mb-2">Favourite Recipes:</h3>
          <ul className="list-disc pl-5">
            {user.favouriteRecipes.map(recipe => (
              <li key={recipe.id}>
                <Link
                  href={`/${recipe.id}`}
                  className="text-blue-400 hover:underline"
                >
                  {recipe.recipeName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No favourite recipes yet.</p>
      )}
        </>
        

    )
}

export default ProfilePage