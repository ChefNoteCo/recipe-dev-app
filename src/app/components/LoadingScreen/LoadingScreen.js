import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const LoadingScreen = ({ loading, children }) => {
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return children;
  }
};

export default LoadingScreen;
