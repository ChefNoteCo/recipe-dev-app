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

  return (
    <View>
      {ingredients.map((item, index) => (
        <>
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </>
      ))}
    </View>
  );
};

export default IngredientList;
