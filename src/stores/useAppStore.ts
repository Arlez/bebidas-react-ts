import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"

export const useAppStore = create<RecipesSliceType>()(devtools((...a)=> ({
    ...createRecipesSlice(...a)
})))

export const useAppStore = create<FavoritesSliceType>()(devtools((...a)=> ({
    ...createFavoritesSlice(...a)
})))