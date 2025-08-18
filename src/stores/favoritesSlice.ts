import type { StateCreator } from 'zustand'
import type { Recipe } from '../types'
import { createnotificationSlice, type NotificationSliceType } from './notificationSlice'
import type { RecipesSliceType } from './recipeSlice'

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType ,[], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set({
                favorites: get().favorites.filter(favorite=>favorite.idDrink !== recipe.idDrink) 
            })   
            createnotificationSlice(set, get, api).showNotification({
                text: 'Se elimino de favoritos', 
                error: false
            })
        }else{
            set({
                favorites: [ ...get().favorites, recipe ]
            })
            createnotificationSlice(set, get, api).showNotification({
                text: 'Se agrego a favoritos', 
                error: false
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})