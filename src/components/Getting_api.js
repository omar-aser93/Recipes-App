/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import uuid from "react-uuid";

const Getting_api = () => {  

  const App_id = "6fa4e747"; // keys from the website that provide the api
  const App_key = "60328fb9a6d3b25839cc084927c8ca33";

  const [recipes, setRecipes] = useState([]); // state to store data from the api
  const [search, setSearch] = useState(""); // store the current input value
  const [query, setQuery] = useState("chicken"); //get the final input value & pass it to the query at submit
 

  /* useEffect activats at the render of the app & have the fetch function inside , we use query state not search
 because it will only render once onSubmit so send 1 requst instead of sending requst every time we write letter*/
  useEffect(() => {
    getRecipe();  }, [query]);


  const getRecipe = async () => {        //function to awaits api data to be fetched    
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}` );
    const data = await response.json();
    setRecipes(data.hits);    };


  const handleSubmit = (e) => {     //function to stop refresh & pass the input value to query only after Submit    
    e.preventDefault();
    setQuery(search);         
     setSearch('') };


  return (           //search form & passing the data as props to Recip component    
    <div onSubmit={handleSubmit}>

      <form className="recipe_form">

        <input className="recipe_input"  type="search" placeholder="Enter the meal name"
          value={search}  onChange={(e) => setSearch(e.target.value)} ></input>

        <button className="recipe_button" type="submit"> search </button>

      </form>

    <div className="recipesList"> {recipes.map((recipe) => (  <Recipe  key={uuid()} title={recipe.recipe.label}      
    calories={recipe.recipe.calories}     image={recipe.recipe.image}
     ingredients={recipe.recipe.ingredients}  /> ))}</div> 

  
    </div>  );
};

export default Getting_api;
