'use client'

import { useEffect, useState } from "react"
import { API_ENDPOINT } from "@/data/endpoint";
import { CategoryType, RecipeListType } from "@/utils/types";
import Link from "next/link";

const CategoryPage = () => {

    const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>([])

    const getCategories = async () => {
        const response = await fetch(`${API_ENDPOINT}categories.php`);
        const data = await response.json();

        const result:CategoryType[] = data.categories.map((item:any) => (
            {
                categoryName : item.strCategory,
                categoryImage : item.strCategoryThumb,
                categoryDescription: item.strCategoryDescription
            }
        ))

        setSelectedCategory(result)
    }

    useEffect(() => {
        getCategories()
    },[])

    return (
        <>
    <div className="grid grid-cols-2 gap-4 items-center justify-center p-4">
        {selectedCategory.map((item:CategoryType,index:number) =>  <div key={index} className="flex flex-col max-w-[400px] items-center bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
                
                {/* <Link href={setClickedRecipe(`${API_ENDPOINT}lookup.php?i=${id}`)}>{name}</Link> */}
                <Link className="text-white font-semibold text-center mb-2" href={`/category/${item.categoryName}`}>Name:{item.categoryName}</Link>
                <img className="w-40 h-40 object-cover rounded" src={item.categoryImage} alt={item.categoryName} />
                
            </div> )
        }</div>
        
        </>
    )
}

export default CategoryPage