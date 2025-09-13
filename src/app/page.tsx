'use client'

import CategoryRecipe from "@/components/CategoryRecipe";
import { useUserContext } from "@/utils/contexts";
import { UserContextType, RecipeListType } from "@/utils/types";
import { API_ENDPOINT } from "@/data/endpoint";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUserContext() as UserContextType
  const [recipeListArray, setRecipeListArray] = useState<RecipeListType[]>([])
  const [randomeRecipe, setRandomRecipe] = useState<boolean>(false)
  // const getCategoryRecipes = async () => {
  //   try {
  //     const response = await fetch(`${API_ENDPOINT}filter.php?c=${user?.favouriteCategory}`)
  //     const data = await response.json()

  //     const recipeList: RecipeListType[] = data.meals.map((item: any) => ({
  //       name: item.strMeal,
  //       image: item.strMealThumb,
  //       id: item.idMeal
  //     }))
  //     setRecipeListArray(recipeList);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getRandomRecipe = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}random.php`)
      const data = await response.json()
      
        const recipeList: RecipeListType[] = data.meals.map((item: any) => ({
        name: item.strMeal,
        image: item.strMealThumb,
        id: item.idMeal
      }))
      console.log(recipeList)
      setRecipeListArray(recipeList);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRandomRecipe()
  }, [randomeRecipe])

  return (
 <div className="flex items-center justify-center  p-3">
  {user && (
    <div className="w-full max-w-6xl text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        👋 Welcome to My Recipes, <span className="text-orange-600">{user.name}</span>
      </h2>

      <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
        🍽️ Top Recipe of the Week
      </h3>

  <div className="flex justify-center w-full">
  <div className="grid grid-cols-1 gap-6 justify-items-center">
    {recipeListArray.map((item, index) => (
      <CategoryRecipe key={index} {...item} />
    ))}
  </div>
</div>


      <div className="mt-8">
        <button
          onClick={() => getRandomRecipe()}
          className="px-6 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors shadow-md"
        >
          🔄 Want another Recipe
        </button>
      </div>
    </div>
  )}
</div>


  );
}
