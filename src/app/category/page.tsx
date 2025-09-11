'use client'

import { useEffect, useState } from "react"
import { API_ENDPOINT } from "@/data/endpoint";
import { CategoryType, RecipeListType, UserContextType } from "@/utils/types";
import Link from "next/link";
import { useUserContext } from "@/utils/contexts";

const CategoryPage = () => {

    const {user,setUser} = useUserContext() as UserContextType
    const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>([])
    const [booleanCheck, setBooleanCheck] = useState<Boolean>(false)

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

    // const favSelected = (category: string) => {
    //     setUser( (prev) => ({...prev,favouriteCategory : category}))
    // }

   const favSelected = (category: string) => {
  setUser(prevUser => ({
    ...prevUser,
    favouriteCategory: category
  }));
  setBooleanCheck(true)
};

    useEffect(() => {
        getCategories()
    },[])

    return (
        <>
        { user?.favouriteCategory && <h2>Current Favourite Category : {user.favouriteCategory}</h2>}
    <div className="grid grid-cols-2 gap-4 items-center justify-center p-4">
        
        {selectedCategory.map((item:CategoryType,index:number) =>  <div key={index} className="flex flex-col max-w-[400px] items-center bg-gray-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
                
                {/* <Link href={setClickedRecipe(`${API_ENDPOINT}lookup.php?i=${id}`)}>{name}</Link> */}
                <Link className="text-white font-semibold text-center mb-2" href={`/category/${item.categoryName}`}>Name:{item.categoryName}</Link>
                <img className="w-40 h-40 object-cover rounded" src={item.categoryImage} alt={item.categoryName} />
                {<h4>if(booleanCheck) "Toogle On" else "Toggle off"</h4>}
                   <div className="flex-[20%]">
                    <img className={`w-[25%] sm:w-[35%] h-[auto] cursor-pointer m-auto `} onClick={() => favSelected(item.categoryName)} src={ user?.favouriteCategory === item.categoryName ? "favourite_icon.png" : "unfavourite_icon.png"} alt={user?.favouriteCategory === item.categoryName ? `favourite_icon.png ${item.categoryName}` : `unfavourite_icon.png ${item.categoryName}`}></img>
                </div>
            </div> )
        }</div>
        
        </>
    )
}

export default CategoryPage