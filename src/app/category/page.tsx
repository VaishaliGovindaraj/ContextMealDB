'use client'

import { useEffect, useState } from "react"
import { API_ENDPOINT } from "@/data/endpoint";
import { CategoryType, RecipeListType, UserContextType } from "@/utils/types";
import Link from "next/link";
import { useUserContext } from "@/utils/contexts";

const CategoryPage = () => {

    const { user, setUser } = useUserContext() as UserContextType
    const [selectedCategory, setSelectedCategory] = useState<CategoryType[]>([])

    const getCategories = async () => {
        const response = await fetch(`${API_ENDPOINT}categories.php`);
        const data = await response.json();

        const result: CategoryType[] = data.categories.map((item: any) => (
            {
                categoryName: item.strCategory,
                categoryImage: item.strCategoryThumb,
                categoryDescription: item.strCategoryDescription
            }
        ))

        setSelectedCategory(result)
    }

    const favSelected = (category: string) => {
        setUser(prevUser => {
            if (!prevUser) return prevUser;

            const isAlreadyFav = prevUser.favouriteCategory === category;

            return {
                ...prevUser,
                favouriteCategory: isAlreadyFav ? null : category
            };
        });
    };

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <div className="grow">
            {user?.favouriteCategory && (
                <h2 className="text-xl font-semibold text-center text-amber-950 p-3 mb-6">
                    Current Favourite Category:{" "}
                    <span className="text-amber-950">{user.favouriteCategory}</span>
                </h2>
            )}

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 px-4 max-w-[350px] sm:max-w-4xl mx-auto w-full majustify-items-center">

                {selectedCategory.map((item: CategoryType, index: number) => (
                    <div
                        key={index}
                        className=" max-w-[800px] flex flex-col items-center bg-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
                    >
                        {/* Category Name */}
                        <Link
                            className="text-white text-lg font-semibold text-center mb-4 hover:underline"
                            href={`/category/${item.categoryName}`}
                        >
                            {item.categoryName}
                        </Link>

                        {/* Category Image */}
                        <img
                            className="w-40 h-40 object-cover rounded-lg shadow-md mb-4"
                            src={item.categoryImage}
                            alt={item.categoryName}
                        />

                        {/* Favourite Icon */}
                        <div className="flex justify-center mt-2">
                            <img
                                className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform"
                                onClick={() => favSelected(item.categoryName)}
                                src={
                                    user?.favouriteCategory === item.categoryName
                                        ? "favourite_icon.png"
                                        : "unfavourite_icon.png"
                                }
                                alt={
                                    user?.favouriteCategory === item.categoryName
                                        ? `Favourite ${item.categoryName}`
                                        : `Not Favourite ${item.categoryName}`
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>


    )
}

export default CategoryPage