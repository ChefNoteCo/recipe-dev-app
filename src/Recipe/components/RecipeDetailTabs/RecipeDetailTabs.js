import React, { useState } from 'react';
import { View } from 'react-native';
import { Tab, TabView, Text } from 'react-native-elements';

export const RecipeDetailTabs = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  let tabNames = [];
  let tabViews = [];

  tabs.forEach((tab, index) => {
    tabNames.push(<Tab.Item title={tab.name} key={`tab${index}`} />);
    tabViews.push(
      <TabView.Item key={`tabItem${index}`}>{tab.component}</TabView.Item>
    );
  });

  return (
    <View>
      <Tab value={tabIndex} onChange={setTabIndex}>
        <Tab.Item title="Default!" />
        {tabNames}
      </Tab>
      <TabView value={tabIndex} onChange={setTabIndex}>
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h2>Hello default</Text>
        </TabView.Item>
        {tabViews}
      </TabView>
    </View>
  );
};
