import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import NoIngredientNotice from '../NoIngredientNotice/NoIngredientNotice';

const IngredientList = ({ ingredients }) => {
  if (ingredients.length === 0) {
    return (
      <View>
        <NoIngredientNotice />
      </View>
    );
  }

  const ingredientListItems = ingredients.map((item, index) => {
    return (
      <ListItem key={`${item.id}_${index}`} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>
            {item.baseQuantity} {item.baseUnit}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  });

  return <View>{ingredientListItems}</View>;
};

export default IngredientList;
