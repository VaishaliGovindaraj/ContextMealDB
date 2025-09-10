import { API_ENDPOINT } from "@/data/endpoint";
import { RecipeDisplayType, RecipeListType } from "@/utils/types";


const RecipeDetail  = async ({params}: {params : {id : string}}) => {

  const {id} = await params;

     const response = await fetch(`${API_ENDPOINT}lookup.php?i=${id}`)
                  const data = await response.json()
                  console.log(data);
                  const recipeList:RecipeDisplayType[] = data.meals.map((item:any) => ({
                    mealName: item.strMeal,
                    mealCategory: item.strCategory,
                    mealRegion: item.strArea,
                    mealImage: item.strMealThumb,
                    mealInstruction: item.strInstructions
                  }))
                  console.log(recipeList);

    return(
        <>
        <p>RecipeDetailPage</p>
         {recipeList.map((item,index) => (
            <div key={index}>
                <h4>{item.mealName}</h4>
                <img src={item.mealImage} alt={item.mealName} />
                <p>Category:{item.mealCategory}</p>
                <p>Region:{item.mealRegion}</p>
                <p>Instruction:{item.mealInstruction}</p>

            </div>

         ))}
        </>
    )
}

export default RecipeDetail;