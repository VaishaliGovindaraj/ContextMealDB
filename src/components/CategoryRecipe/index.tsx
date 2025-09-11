// import Link from "next/link";
// import { API_ENDPOINT } from "@/data/endpoint";
// import { RecipeListType, UserContextType } from "@/utils/types";
// import { useUserContext } from "@/utils/contexts";
// import { useState } from "react";

// const CategoryRecipe = ({ id, name, image }: RecipeListType) => {
//     const {user,setUser} = useUserContext() as UserContextType


// const favSelected = (recipeName: string) => {
//   setUser(prevUser => {
//     if (!prevUser) return prevUser; // if user is null, skip

//     const currentRecipes = prevUser.favouriteRecipes ?? [];
//     const isAlreadyFav = currentRecipes.includes(recipeName);
//   });
// };

//   return (
//     <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
//       <Link href={`/${id}`} className="text-white font-semibold text-center mb-2">
//         {name}
//       </Link>
//       {user?.favouriteRecipes}
//       <img
//         src={image}
//         alt={name}
//         className="w-40 h-40 object-cover rounded"
//       />
//       <div className="flex-[20%]">
//         <img className={`w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto `} onClick={() => favSelected(name)} src={user?.favouriteCategory === name ? "favourite_icon.png" : "unfavourite_icon.png"} alt={favCategory ? `favourite_icon.png ${name}` : `unfavourite_icon.png ${name}`}></img>
//       </div>
//     </div>
//   )
// }

// export default CategoryRecipe;

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
    <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
      <Link href={`/${id}`} className="text-white font-semibold text-center mb-2">
        {name}
      </Link>

      <img src={image} alt={name} className="w-40 h-40 object-cover rounded" />

      <div className="flex-[20%]">
        <img
          className="w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto"
          onClick={() => favSelected(name,id)}
          src={isFav ? "favourite_icon.png" : "unfavourite_icon.png"}
          alt={isFav ? `favourite_icon.png ${name}` : `unfavourite_icon.png ${name}`}
        />
      </div>

      {/* Optional Debug UI */}
      {user?.favouriteRecipes && (
        <p className="text-white text-sm mt-2">
          Your Favourites: {user.favouriteRecipes.map((item,index)  => <div key={index}>{item.recipeName}</div>)}
        </p>
      )}
    </div>
  );
};

export default CategoryRecipe;
