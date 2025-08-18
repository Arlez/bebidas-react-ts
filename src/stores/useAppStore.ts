import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice"
import { type FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice"
import { type NotificationSliceType, createnotificationSlice } from "./notificationSlice"

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=> ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createnotificationSlice(...a),
})))
