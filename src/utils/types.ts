export interface UserType {
    name:string,
    favouriteCategory : string | null,
    favouriteRecipes : string []
}

export interface UserContextType {
    user : UserType | null,
    setUser : (user:UserType) => void
}

export interface NaviItemTypes{
    name:string,
    link:string
}

export interface RecipeListType {
    name: string,
    image: string,
    id: number
}

export interface CategoryType {
    categoryName: string,
    categoryImage : string,
    categoryDescription: string
}

export interface RecipeDisplayType {
    mealName: string,
    mealCategory: string,
    mealRegion: string,
    mealInstruction: string,
    mealImage: string
}