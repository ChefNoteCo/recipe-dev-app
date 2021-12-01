import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import convert from '../../../app/helpers/convertUnits';

const MeasurementUnitPicker = ({ value, onSelectValue }) => {
  let allUnits = convert().possibilities();

  if (value) {
    allUnits = convert().possibilities(value);
  }

  const formattedUnits = allUnits.map(unit => {
    return { label: unit, value: unit };
  });

  return (
    <View>
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
