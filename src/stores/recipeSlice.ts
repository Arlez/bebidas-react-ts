import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipies: (searchRecipies: SearchFilter) => Promise<void>
}

export const createRecipesSlice :StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })        
    },
    searchRecipies: async (filters)=>{
        await getRecipes(filters)        
    }
})