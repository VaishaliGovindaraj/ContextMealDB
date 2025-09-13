export interface UserType {
    name?: string,
    favouriteCategory?: string | null,
    // favouriteRecipes ?: [
    //     { recipeName: string ,
    //    id:  string
    // }]
    favouriteRecipes?: {
        recipeName: string;
        id: string;
    }[];
}

export interface UserContextType {
    user: UserType | null,
    // setUser : (user:UserType) => void,
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;

}

export interface NaviItemTypes {
    name: string,
    link: string
}

export interface RecipeListType {
    name: string,
    image: string,
    id: string
}

export interface CategoryType {
    categoryName: string,
    categoryImage: string,
    categoryDescription: string
}

export interface RecipeDisplayType {
  mealName: string;
  mealCategory: string;
  mealRegion: string;
  mealInstruction: string;
  mealImage: string;
  mealIngredients: string[]; 
  mealVideo?: string; 
}
