import { useState, useEffect } from "react";
import "./App.css";

import cadotomato from "./assets/cadotomato.jpg";
import eggtoast from "./assets/eggtoast.jpg";
import fruitbowl from "./assets/fruitbowl.jpg";
import pancake from "./assets/pancake.jpg";

import lunch1 from "./assets/lunch1.jpg";
import lunch2 from "./assets/lunch2.jpg";
import lunch3 from "./assets/lunch3.jpg";
import lunch4 from "./assets/lunch4.jpg";

import dinner1 from "./assets/dinner1.jpg";
import dinner2 from "./assets/dinner2.jpg";
import dinner3 from "./assets/dinner3.jpg";
import dinner4 from "./assets/dinner4.jpg";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [savedRecipes, setSavedRecipes] = useState(() => {
    const saved = localStorage.getItem("mietteSavedRecipes");
    return saved ? JSON.parse(saved) : [];
  });

  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "mietteSavedRecipes",
      JSON.stringify(savedRecipes)
    );
  }, [savedRecipes]);

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
  ];

  const recipes = [
    {
      id: 1,
      title: "Avocado Tomato Toast",
      category: "Breakfast",
      image: cadotomato,
      servings: "Serves 1",
      prepTime: "10 mins",
      ingredients: [
        ["Bread", "2 slices"],
        ["Avocado", "½ medium"],
        ["Tomato", "½ medium"],
        ["Lemon juice", "1 tsp"],
        ["Olive oil", "1 tsp"],
        ["Salt", "⅛ tsp"],
        ["Black pepper", "⅛ tsp"],
      ],
      preparation: [
        "Toast 2 slices of bread until golden and crispy.",
        "Cut ½ avocado in half, remove the seed, and scoop out the flesh.",
        "Mash the avocado in a small bowl.",
        "Add 1 tsp lemon juice, ⅛ tsp salt, and ⅛ tsp black pepper. Mix well.",
        "Slice ½ tomato into thin slices.",
        "Spread the avocado mixture evenly over the toasted bread.",
        "Arrange the tomato slices on top.",
        "Drizzle 1 tsp olive oil over the toast.",
        "Sprinkle a little extra black pepper if desired.",
        "Serve immediately.",
      ],
    },

    {
      id: 2,
      title: "Egg Toast",
      category: "Breakfast",
      image: eggtoast,
      servings: "Serves 1",
      prepTime: "10 mins",
      ingredients: [
        ["Bread", "2 slices"],
        ["Eggs", "2"],
        ["Butter/oil", "1 tsp"],
        ["Salt", "⅛ tsp"],
        ["Black pepper", "⅛ tsp"],
      ],
      preparation: [
        "Crack 2 eggs into a bowl.",
        "Add ⅛ tsp salt and ⅛ tsp black pepper.",
        "Whisk the eggs until well combined.",
        "Heat a pan over medium heat and add 1 tsp butter or oil.",
        "Pour the eggs into the pan.",
        "Stir gently with a spatula until the eggs are cooked and slightly creamy.",
        "Toast 2 slices of bread until golden.",
        "Place the scrambled eggs evenly over the toast.",
        "Sprinkle with additional pepper if desired.",
        "Serve warm.",
      ],
    },

    {
      id: 3,
      title: "Fruit Bowl",
      category: "Breakfast",
      image: fruitbowl,
      servings: "Serves 1",
      prepTime: "5 mins",
      ingredients: [
        ["Banana", "½ medium"],
        ["Apple", "½ medium"],
        ["Strawberries", "4–5"],
        ["Grapes", "¼ cup"],
        ["Blueberries", "¼ cup"],
        ["Yogurt", "½ cup"],
        ["Honey", "1 tsp"],
      ],
      preparation: [
        "Wash all the fruits thoroughly.",
        "Slice ½ banana into rounds.",
        "Cut ½ apple into small bite-sized pieces.",
        "Slice 4–5 strawberries.",
        "Add ¼ cup grapes and ¼ cup blueberries.",
        "Place all the fruits in a serving bowl.",
        "Add ½ cup yogurt over the fruits.",
        "Drizzle 1 tsp honey on top.",
        "Gently mix or leave layered.",
        "Serve immediately or chill before serving.",
      ],
    },

    {
      id: 4,
      title: "Pancakes",
      category: "Breakfast",
      image: pancake,
      servings: "Serves 1 — 3–4 pancakes",
      prepTime: "15 mins",
      ingredients: [
        ["All-purpose flour", "½ cup"],
        ["Milk", "⅓ cup"],
        ["Egg", "1"],
        ["Sugar", "1 tbsp"],
        ["Baking powder", "½ tsp"],
        ["Butter", "1 tsp"],
        ["Vanilla essence", "¼ tsp"],
        ["Honey/maple syrup", "1 tbsp"],
      ],
      preparation: [
        "Add ½ cup flour, 1 tbsp sugar, and ½ tsp baking powder to a bowl.",
        "In a separate bowl, whisk 1 egg, ⅓ cup milk, and ¼ tsp vanilla essence.",
        "Pour the wet mixture into the dry ingredients.",
        "Mix gently until a smooth batter forms. Do not overmix.",
        "Heat a non-stick pan over medium heat.",
        "Lightly grease the pan with some of the 1 tsp butter.",
        "Pour a small amount of batter onto the pan.",
        "Cook until bubbles begin to appear on the surface.",
        "Flip the pancake carefully.",
        "Cook the other side until golden brown.",
        "Repeat with the remaining batter.",
        "Stack the pancakes on a plate.",
        "Drizzle with 1 tbsp honey or maple syrup.",
        "Serve warm.",
      ],
    },

    {
      id: 5,
      title: "Falafel Bowl",
      category: "Lunch",
      image: lunch1,
      servings: "Serves 1",
      prepTime: "20 mins",
      ingredients: [
        ["Falafel", "4 pieces"],
        ["Cooked rice/quinoa", "¾ cup"],
        ["Lettuce", "½ cup"],
        ["Cucumber", "½ medium"],
        ["Tomato", "½ medium"],
        ["Hummus", "2 tbsp"],
        ["Tahini", "1 tbsp"],
        ["Lemon juice", "1 tsp"],
      ],
      preparation: [
        "Cook ¾ cup rice or quinoa according to its cooking instructions.",
        "Allow the cooked grain to cool slightly.",
        "Heat or prepare 4 falafel pieces until crisp and golden.",
        "Wash and chop ½ cup lettuce.",
        "Slice ½ cucumber and ½ tomato.",
        "Add the cooked rice or quinoa to a serving bowl.",
        "Arrange the lettuce, cucumber, and tomato around the rice.",
        "Place the 4 falafel pieces on top.",
        "Add 2 tbsp hummus.",
        "Drizzle 1 tbsp tahini over the bowl.",
        "Finish with 1 tsp lemon juice.",
        "Serve fresh.",
      ],
    },

    {
      id: 6,
      title: "Pasta Salad",
      category: "Lunch",
      image: lunch2,
      servings: "Serves 1",
      prepTime: "20 mins",
      ingredients: [
        ["Dry pasta", "¾ cup"],
        ["Cherry tomatoes", "½ cup"],
        ["Cucumber", "½ medium"],
        ["Bell pepper", "¼ cup"],
        ["Olives", "2 tbsp"],
        ["Sweet corn", "2 tbsp"],
        ["Olive oil", "1 tbsp"],
        ["Lemon juice", "1 tsp"],
        ["Dried herbs", "½ tsp"],
        ["Salt", "⅛ tsp"],
        ["Black pepper", "⅛ tsp"],
      ],
      preparation: [
        "Bring a pot of water to a boil and add a little salt.",
        "Add ¾ cup dry pasta.",
        "Cook according to the package instructions until tender.",
        "Drain the pasta.",
        "Rinse it under cold water to cool it down.",
        "Cut ½ cup cherry tomatoes in half.",
        "Dice ½ cucumber and ¼ cup bell pepper.",
        "Add the pasta, vegetables, 2 tbsp olives, and 2 tbsp sweet corn to a bowl.",
        "Combine olive oil, lemon juice, dried herbs, salt, and pepper for the dressing.",
        "Pour the dressing over the pasta.",
        "Toss everything gently until evenly coated.",
        "Refrigerate for 10–15 minutes if desired.",
        "Serve chilled.",
      ],
    },

    {
      id: 7,
      title: "Tomato Soup",
      category: "Lunch",
      image: lunch3,
      servings: "Serves 1",
      prepTime: "30 mins",
      ingredients: [
        ["Tomatoes", "2 medium"],
        ["Onion", "¼ medium"],
        ["Garlic", "1 clove"],
        ["Butter/oil", "1 tsp"],
        ["Vegetable stock/water", "1 cup"],
        ["Salt", "¼ tsp"],
        ["Black pepper", "⅛ tsp"],
        ["Mixed herbs", "¼ tsp"],
      ],
      preparation: [
        "Wash and roughly chop 2 medium tomatoes.",
        "Chop ¼ onion and 1 garlic clove.",
        "Heat 1 tsp butter or oil in a saucepan.",
        "Add the onion and sauté until soft.",
        "Add the garlic and sauté for about 30 seconds.",
        "Add the chopped tomatoes.",
        "Cook for 4–5 minutes until the tomatoes soften.",
        "Add 1 cup vegetable stock or water.",
        "Season with salt, black pepper, and mixed herbs.",
        "Cover and simmer for 15–20 minutes.",
        "Allow it to cool slightly.",
        "Blend the soup until smooth.",
        "Return it to the saucepan and simmer for another 2–3 minutes.",
        "Adjust seasoning and serve hot.",
      ],
    },

    {
      id: 8,
      title: "Grilled Chicken Tacos",
      category: "Lunch",
      image: lunch4,
      servings: "Serves 1 — 2 tacos",
      prepTime: "30 mins",
      ingredients: [
        ["Chicken breast", "100 g"],
        ["Small tortillas", "2"],
        ["Lettuce", "¼ cup"],
        ["Tomato", "½ medium"],
        ["Onion", "¼ medium"],
        ["Cheese", "2 tbsp"],
        ["Lime juice", "1 tsp"],
        ["Taco seasoning", "1 tsp"],
        ["Oil", "1 tsp"],
        ["Salt", "⅛ tsp"],
      ],
      preparation: [
        "Cut 100 g chicken breast into small pieces or thin strips.",
        "Add taco seasoning, lime juice, and salt.",
        "Mix well and marinate for 15–30 minutes.",
        "Heat 1 tsp oil in a grill pan.",
        "Grill the chicken for approximately 5–7 minutes until completely cooked.",
        "Remove the chicken and allow it to rest.",
        "Warm 2 tortillas on the same pan.",
        "Slice the tomato and onion.",
        "Add lettuce to each tortilla.",
        "Divide the grilled chicken between the tortillas.",
        "Add tomato, onion, and cheese.",
        "Finish with a squeeze of lime.",
        "Serve immediately.",
      ],
    },

    {
      id: 9,
      title: "Fenugreek Flatbread + Chickpea Curry",
      category: "Dinner",
      image: dinner1,
      servings: "Serves 1 — 2 flatbreads",
      prepTime: "40 mins",
      ingredients: [
        ["Wheat flour", "½ cup"],
        ["Fresh fenugreek leaves", "¼ cup"],
        ["Water", "≈ ¼ cup"],
        ["Oil/ghee", "1 tsp"],
        ["Salt", "¼ tsp"],
        ["Cumin powder", "¼ tsp"],
        ["Red chilli powder", "⅛ tsp"],
        ["Cooked chickpeas", "¾ cup"],
        ["Onion", "½ medium"],
        ["Tomato", "1 medium"],
        ["Ginger-garlic paste", "1 tsp"],
        ["Turmeric", "⅛ tsp"],
        ["Red chilli powder", "¼ tsp"],
        ["Garam masala", "¼ tsp"],
        ["Water", "½ cup"],
        ["Coriander", "1 tbsp"],
      ],
      preparation: [
        "Wash and finely chop the fenugreek leaves.",
        "Mix wheat flour, fenugreek leaves, salt, cumin powder, and chilli powder.",
        "Gradually add water and knead into a soft dough.",
        "Cover and rest for 10–15 minutes.",
        "Divide into 2 portions and roll into balls.",
        "Roll each ball into a thin flatbread.",
        "Cook each flatbread on a hot pan, flipping until cooked.",
        "Brush lightly with oil or ghee.",
        "For the curry, heat oil in a pan.",
        "Sauté onion until golden.",
        "Add ginger-garlic paste and sauté for 1 minute.",
        "Add chopped tomato and cook until soft.",
        "Add the spices and cook for 1–2 minutes.",
        "Add cooked chickpeas and water.",
        "Cover and simmer for 10–15 minutes.",
        "Mash a few chickpeas to thicken the gravy.",
        "Garnish with coriander.",
        "Serve hot with the flatbreads.",
      ],
    },

    {
      id: 10,
      title: "Sushi",
      category: "Dinner",
      image: dinner2,
      servings: "Serves 1 — 1 roll / 6–8 pieces",
      prepTime: "30 mins",
      ingredients: [
        ["Sushi rice, uncooked", "½ cup"],
        ["Nori sheet", "1"],
        ["Cucumber", "¼ medium"],
        ["Avocado", "¼ medium"],
        ["Carrot", "¼ medium"],
        ["Rice vinegar", "1 tbsp"],
        ["Soy sauce", "1 tbsp"],
      ],
      preparation: [
        "Rinse ½ cup sushi rice several times until the water becomes relatively clear.",
        "Cook the rice according to the package instructions.",
        "Allow the cooked rice to cool slightly.",
        "Mix in 1 tbsp rice vinegar.",
        "Cut cucumber, avocado, and carrot into thin strips.",
        "Place the nori sheet on a sushi mat.",
        "Spread the seasoned rice evenly over the nori.",
        "Arrange the vegetables near the bottom edge.",
        "Roll the sushi tightly using the mat.",
        "Seal the roll by lightly wetting the exposed edge of the nori.",
        "Cut into 6–8 pieces with a sharp, slightly wet knife.",
        "Serve with soy sauce.",
      ],
    },

    {
      id: 11,
      title: "Grilled Paneer Rice Salad",
      category: "Dinner",
      image: dinner3,
      servings: "Serves 1",
      prepTime: "25 mins",
      ingredients: [
        ["Paneer", "100 g"],
        ["Cooked rice", "¾ cup"],
        ["Lettuce", "½ cup"],
        ["Cucumber", "½ medium"],
        ["Tomato", "½ medium"],
        ["Bell pepper", "¼ cup"],
        ["Olive oil", "1 tbsp"],
        ["Lemon juice", "1 tsp"],
        ["Mixed herbs", "½ tsp"],
        ["Salt", "⅛ tsp"],
        ["Black pepper", "⅛ tsp"],
      ],
      preparation: [
        "Cut 100 g paneer into bite-sized cubes.",
        "Season with salt, black pepper, and mixed herbs.",
        "Heat a grill pan with some olive oil.",
        "Grill paneer until golden brown on all sides.",
        "Cook ¾ cup rice and allow it to cool slightly.",
        "Wash and chop the lettuce.",
        "Dice cucumber, tomato, and bell pepper.",
        "Add rice and vegetables to a large bowl.",
        "Add the grilled paneer.",
        "Mix lemon juice with the remaining olive oil.",
        "Pour the dressing over the salad.",
        "Toss gently and serve fresh.",
      ],
    },

    {
      id: 12,
      title: "Fried Cauliflower",
      category: "Dinner",
      image: dinner4,
      servings: "Serves 1",
      prepTime: "25 mins",
      ingredients: [
        ["Cauliflower florets", "1½ cups (≈150 g)"],
        ["All-purpose flour", "¼ cup"],
        ["Cornflour", "2 tbsp"],
        ["Water", "¼ cup"],
        ["Oil for frying", "≈ 1 cup"],
        ["Salt", "¼ tsp"],
        ["Black pepper", "⅛ tsp"],
        ["Red chilli powder", "¼ tsp"],
      ],
      preparation: [
        "Wash and cut approximately 150 g cauliflower into small florets.",
        "Bring water to a boil.",
        "Blanch the cauliflower for 2–3 minutes.",
        "Drain and pat the cauliflower dry.",
        "Mix flour, cornflour, salt, black pepper, and chilli powder.",
        "Gradually add water to form a thick batter.",
        "Heat approximately 1 cup oil in a deep pan.",
        "Dip each cauliflower floret into the batter.",
        "Carefully place the coated florets into the hot oil.",
        "Fry until golden brown and crispy.",
        "Remove and place on a paper towel.",
        "Serve hot with your preferred dipping sauce.",
      ],
    },
  ];

  const toggleSave = (recipeId) => {
    setSavedRecipes((current) => {
      if (current.includes(recipeId)) {
        return current.filter((id) => id !== recipeId);
      }

      return [...current, recipeId];
    });
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSaved =
      !showSaved || savedRecipes.includes(recipe.id);

    const matchesCategory =
      activeCategory === "All" ||
      recipe.category === activeCategory;

    const matchesSearch =
      recipe.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return (
      matchesSaved &&
      matchesCategory &&
      matchesSearch
    );
  });

  return (
    <div className="app">

      <header className="header">

        <div className="brand">
          <h1>miette</h1>

          <p>
            The art of the perfect crumb,
            made beautifully simple
          </p>
        </div>

        <nav>

          <button
            onClick={() => {
              setShowSaved(false);
              setActiveCategory("All");
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              setShowSaved(false);
              setActiveCategory("All");
            }}
          >
            Explore
          </button>

          <button
            onClick={() => {
              setShowSaved(true);
              setActiveCategory("All");
            }}
          >
            ♡ Saved
          </button>

        </nav>

        <div className="search">

          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />

        </div>

      </header>

      <div className="line"></div>

      <div className="page-heading">

        <h2>
          {showSaved
            ? "Saved Recipes"
            : "Recipes"}
        </h2>

        <p>
          {showSaved
            ? "Your little collection of favourites."
            : "Simple recipes, beautifully made."}
        </p>

      </div>

      {!showSaved && (
        <div className="categories">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "category active"
                  : "category"
              }
              onClick={() => {
                setActiveCategory(category);
                setShowSaved(false);
              }}
            >
              {category}
            </button>

          ))}

        </div>
      )}

      <main className="recipe-grid">

        {filteredRecipes.length > 0 ? (

          filteredRecipes.map((recipe) => (

            <article
              className="recipe-card"
              key={recipe.id}
            >

              <div className="image-container">

                <img
                  src={recipe.image}
                  alt={recipe.title}
                />

                <button
                  className="heart"
                  onClick={() =>
                    toggleSave(recipe.id)
                  }
                >
                  {savedRecipes.includes(recipe.id)
                    ? "♥"
                    : "♡"}
                </button>

              </div>

              <div className="recipe-info">

                <span className="recipe-category">
                  {recipe.category}
                </span>

                <h2>{recipe.title}</h2>

                <div className="recipe-bottom">

                  <span>
                    {recipe.servings}
                  </span>

                  <button
                    className="save"
                    onClick={() =>
                      toggleSave(recipe.id)
                    }
                  >
                    {savedRecipes.includes(recipe.id)
                      ? "♥ Saved"
                      : "♡ Save"}
                  </button>

                </div>

                <button
                  className="view-recipe"
                  onClick={() =>
                    setSelectedRecipe(recipe)
                  }
                >
                  View Recipe →
                </button>

              </div>

            </article>

          ))

        ) : (

          <div className="no-results">

            <h2>
              {showSaved
                ? "No saved recipes yet"
                : "No recipes found"}
            </h2>

            <p>
              {showSaved
                ? "Save a recipe and it will appear here."
                : "Try another search or category."}
            </p>

          </div>

        )}

      </main>

      {selectedRecipe && (

        <div
          className="recipe-overlay"
          onClick={() =>
            setSelectedRecipe(null)
          }
        >

          <div
            className="recipe-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-modal"
              onClick={() =>
                setSelectedRecipe(null)
              }
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
            />

            <div className="modal-content">

              <span className="recipe-category">
                {selectedRecipe.category}
              </span>

              <h2>
                {selectedRecipe.title}
              </h2>

              <div className="modal-details">

                <span>
                  {selectedRecipe.servings}
                </span>

                <span>
                  Prep: {selectedRecipe.prepTime}
                </span>

              </div>

              <section className="recipe-section">

                <h3>Ingredients</h3>

                <div className="ingredients-list">

                  {selectedRecipe.ingredients.map(
                    (ingredient, index) => (

                      <div
                        className="ingredient"
                        key={index}
                      >

                        <span>
                          {ingredient[0]}
                        </span>

                        <span>
                          {ingredient[1]}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </section>

              <section className="recipe-section">

                <h3>Preparation</h3>

                <ol className="preparation-list">

                  {selectedRecipe.preparation.map(
                    (step, index) => (

                      <li key={index}>
                        {step}
                      </li>

                    )
                  )}

                </ol>

              </section>

              <button
                className="modal-save"
                onClick={() =>
                  toggleSave(selectedRecipe.id)
                }
              >
                {savedRecipes.includes(
                  selectedRecipe.id
                )
                  ? "♥ Saved"
                  : "♡ Save Recipe"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;