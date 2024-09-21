import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/homeScreen";
import { FavouriteScreen } from "../screens/favouriteScreen";
import { ErrorScreen } from "../screens/errorScreen";
import RecipeDetailScreen from "../screens/detailedScreen";
import { createContext, useState } from "react";

export const GlobalData = createContext();
export const Stack = () => {
    const [favourites,setIsFavourites]=useState([])
  const addFavouriteHandler = (recipe) => {
    const itemIsExists=favourites.find(each=>each.id===recipe.id)
        if(!itemIsExists){
            setIsFavourites([...favourites,recipe])
        }else{
            alert('Item already exists')
        }   
     
  };
  return (
    <GlobalData.Provider
      value={{
        addFavouriteHandler,
        favouriteRecipe:favourites
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="favourites" element={<FavouriteScreen />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetailScreen />} />
          <Route path="/*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </GlobalData.Provider>
  );
};
