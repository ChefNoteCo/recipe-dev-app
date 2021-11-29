import React from 'react';
import { RecipeName } from './MetadataComponents';

const RecipeMetadata = ({ recipe }) => {
  // const tabs = [
  //   {
  //     name: 'Recipe',
  //     component: (
  //       <>
  //         <RecipeIngredientList ingredients={recipe.ingredients} />
  //         <RecipeInstructionList instructions={recipe.instructions} />
  //       </>
  //     ),
  //   },
  // ];
  return (
    <>
      <RecipeName name={recipe.name} />
    </>
  );
};

export default RecipeMetadata;
