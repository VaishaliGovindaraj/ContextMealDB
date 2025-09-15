'use client'

import Link from "next/link";
import { RecipeListType, UserContextType } from "@/utils/types";
import { useUserContext } from "@/utils/contexts";

const CategoryRecipe = ({ id, name, image }: RecipeListType) => {
  const { user, setUser } = useUserContext() as UserContextType;

  const favSelected = (recipeName: string, recipeId: string) => {
    setUser(prevUser => {
      if (!prevUser) return prevUser; // skip if no user

      const currentRecipes = prevUser.favouriteRecipes ?? [];

      // Check if the recipe is already favourited by matching IDs
      // Checks if the recipe has been favourited with the props id and current loop id
      const isAlreadyFav = currentRecipes.some(r => r.id === recipeId);

      return {
        ...prevUser,
        favouriteRecipes: isAlreadyFav
          ? currentRecipes.filter(r => r.id !== recipeId) // remove if exists
          : [...currentRecipes, { recipeName, id: recipeId }] // add if not
      };
    });
  };
  const isFav = user?.favouriteRecipes?.some(r => r.id === id);

  return (

    <div className=" max-w-xs sm:max-w-2xl w-[100%]  bg-gray-800 rounded-lg p-6 mx-auto mt-4 mb-6 shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center">

      <Link href={`/${id}`} className="text-white text-2xl font-semibold mb-3 hover:underline">
        {name}
      </Link>


      <img
        src={image}
        alt={name}
        className="w-60 h-60 object-cover rounded-lg shadow-md mb-3"
      />


      <button
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition"
        onClick={() => favSelected(name, id)}
      >
        <img
          className="w-10 h-10"
          src={isFav ? "/favourite_icon.png" : "/unfavourite_icon.png"}
          alt={isFav ? `Favourite ${name}` : `Not Favourite ${name}`}
        />
      </button>


      {/* {user?.favouriteRecipes?.length ? (
      <div className="text-white text-l mt-4 w-full text-center">
        <p className="font-medium mb-1">Your Favourites:</p>
        <ul className="list-disc list-inside space-y-1">
          {user.favouriteRecipes?.map((item, index) => (
            <li key={index}> <Link href={`/${id}`} className="text-white text-2xl font-semibold mb-3 hover:underline">
      {name}
    </Link></li>
          ))}
        </ul>
      </div>
    ) : null} */}

    </div>





  );
};

export default CategoryRecipe;
