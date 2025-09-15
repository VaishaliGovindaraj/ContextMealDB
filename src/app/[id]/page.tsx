import { API_ENDPOINT } from "@/data/endpoint";
import { RecipeDisplayType } from "@/utils/types";

const RecipeDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const response = await fetch(`${API_ENDPOINT}lookup.php?i=${id}`);
  const data = await response.json();

  const recipeList: RecipeDisplayType[] = data.meals.map((item: any) => {
    
    const ingredientKeys = Object.keys(item).filter((key) =>
      key.includes("strIngredient")
    );

    
    const all_ingredients: string[] = [];
    for (let i = 0; i < ingredientKeys.length; i++) {
      if (item[ingredientKeys[i]]) {
        all_ingredients.push(
          `${item[ingredientKeys[i]]} - ${item[`strMeasure${i + 1}`]}`
        );
      } else {
        break;
      }
    }

    return {
      mealName: item.strMeal,
      mealCategory: item.strCategory,
      mealRegion: item.strArea,
      mealImage: item.strMealThumb,
      mealInstruction: item.strInstructions,
      mealIngredients: all_ingredients,
      mealVideo: item.strYoutube,
    };
  });

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-6">Recipe Detail</h2>

      {recipeList.map((item, index) => (
        <div
          key={index}
          className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg mb-8"
        >
          
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            {item.mealName}
          </h3>

          
          <img
            src={item.mealImage}
            alt={item.mealName}
            className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
          />

          
          <p className="text-gray-300 text-center">
            <span className="font-medium">Category:</span> {item.mealCategory}
          </p>
          <p className="text-gray-300 text-center mb-4">
            <span className="font-medium">Region:</span> {item.mealRegion}
          </p>

          
          <h4 className="text-lg font-semibold text-white mb-2">
            Ingredients:
          </h4>
          <ul className="list-disc list-inside text-gray-200 mb-4">
            {item.mealIngredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>

          
          <h4 className="text-lg font-semibold text-white mb-2">
            Instructions:
          </h4>
          <p className="text-gray-200 mb-4">{item.mealInstruction}</p>

          
          {item.mealVideo && (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${item.mealVideo.split("v=")[1]}`}
                title={item.mealName}
                allowFullScreen
                className="w-full h-64 rounded-lg shadow-md"
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default RecipeDetail;
