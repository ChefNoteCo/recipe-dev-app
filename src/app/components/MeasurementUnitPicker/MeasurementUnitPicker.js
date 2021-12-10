import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import convert from '../../../app/helpers/convertUnits';

const MeasurementUnitPicker = ({ style, value, onSelectValue }) => {
  let allUnits = convert().possibilities();

  // if (value) {
  //   try {
  //     allUnits = convert().possibilities(value);
  //     debugger;
  //   } catch (err) {
  //     console.log('Error converting', err.message);
  //   }
  // }

  const formattedUnits = allUnits.map(unit => {
    return { label: unit, value: unit };
  });

  return (
    <View style={style}>
      <RNPickerSelect
        items={formattedUnits}
        onValueChange={onSelectValue}
        value={value}
        placeholder={{ label: 'Unit' }}
      />
    </View>
  );
};

export default MeasurementUnitPicker;
