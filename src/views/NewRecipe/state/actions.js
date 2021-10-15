import actionCreator from '../../../helpers/actionCreator';

export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export const addRecipe = actionCreator(ADD_RECIPE, 'recipe');
export const editRecipe = actionCreator(EDIT_RECIPE, 'recipe');
