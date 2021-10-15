const { ADD_RECIPE, EDIT_RECIPE } from './actions.js'

export function newRecipe(state = [], action) {
  switch(action.type) {
    case ADD_RECIPE:
      return [...state, recipe]
    default:
      return state
  }
}