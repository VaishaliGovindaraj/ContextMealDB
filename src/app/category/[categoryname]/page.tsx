import CategoryRecipe from "@/components/CategoryRecipe";
import { API_ENDPOINT } from "@/data/endpoint";
import { RecipeListType } from "@/utils/types";

const CategoryName = async ({params}: {params : {categoryname: string} }) => {
    const {categoryname} = await params;
        
    
          const response = await fetch(`${API_ENDPOINT}filter.php?c=${categoryname}`)
          const data = await response.json()
          
          const recipeList:RecipeListType[] = data.meals.map((item:any) => ({
            name: item.strMeal,
            image: item.strMealThumb,
            id: item.idMeal
          }))
         

    return(
        
            <div>
            
          {recipeList.map((item,index) => 
                 <CategoryRecipe key={index} {...item} /> )}
        </div>
    )
}

export default CategoryName