import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { type FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a)=> ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))
