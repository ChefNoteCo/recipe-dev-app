import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

const MetadataForm = ({ recipe, onFieldChange }) => {
  return (
    <View>
      <Input
        value={recipe.name}
        onChangeText={val => onFieldChange('name', val)}
        placeholder="Recipe Name"
      />
      <Input
        value={recipe.servings}
        onChangeText={val => onFieldChange('servings', val)}
        placeholder="Servings"
        keyboardType="number-pad"
      />
      <Input
        value={recipe.prepTime}
        onChangeText={val => onFieldChange('prepTime', val)}
        placeholder="Prep Time (minutes)"
        keyboardType="number-pad"
      />
      <Input
        value={recipe.cookTime}
        onChangeText={val => onFieldChange('cookTime', val)}
        placeholder="Cook Time (minutes)"
        keyboardType="number-pad"
      />
    </View>
  );
};

export default MetadataForm;
