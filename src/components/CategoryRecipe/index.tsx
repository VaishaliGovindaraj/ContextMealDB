import Link from "next/link";
import { API_ENDPOINT } from "@/data/endpoint";
import { RecipeListType } from "@/utils/types";

const CategoryRecipe = ({ id, name, image }: RecipeListType) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
      <Link href={`/${id}`} className="text-white font-semibold text-center mb-2">
        {name}
      </Link>
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded"
      />
    </div>
  )
}

 export default CategoryRecipe;