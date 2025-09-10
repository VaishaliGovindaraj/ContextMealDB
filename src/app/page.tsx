'use client'

import CategoryRecipe from "@/components/CategoryRecipe";
import { useUserContext } from "@/utils/contexts";
import { UserContextType, RecipeListType } from "@/utils/types";
import { API_ENDPOINT } from "@/data/endpoint";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUserContext() as UserContextType
  const [recipeListArray, setRecipeListArray] = useState<RecipeListType[]>([])



  const getCategoryRecipes = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}filter.php?c=${user?.favouriteCategory}`)
      const data = await response.json()

      const recipeList: RecipeListType[] = data.meals.map((item: any) => ({
        name: item.strMeal,
        image: item.strMealThumb,
        id: item.idMeal
      }))
      setRecipeListArray(recipeList);
    } catch (error) {
      console.log(error)
    }
  }

  const getRandomRecipe = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}random.php`)
      const data = await response.json()
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    user?.favouriteCategory ? getCategoryRecipes() : getRandomRecipe()
  }, [user?.favouriteCategory])

  return (
    <div className="">
      {user && <>Welcome to my Recipes,  {user.name}
        {user?.favouriteCategory ?
          <div>
            <h5>Recipies from your favourite Category</h5>
            <div className="grid grid-cols-3 gap-4 items-center justify-center
             p-4">
              {
              recipeListArray.map((item, index) =>
              <CategoryRecipe key={index} {...item} />)
              }</div>

          </div>
          : <p>No Category</p>}</>}

    </div>
  );
}
