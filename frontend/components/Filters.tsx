import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Filters = ({ degree, setDegree, program, setProgram, specialization, setSpecialization }) => {
  return (
    <View className="p-4">
      <Text className="text-lg font-bold">Degree</Text>
      <Picker selectedValue={degree} onValueChange={(itemValue) => setDegree(itemValue)}>
        <Picker.Item label="Bachelors" value="Bachelors" />
        <Picker.Item label="Masters" value="Masters" />
        <Picker.Item label="Ph.D" value="Ph.D" />
        <Picker.Item label="Diploma" value="Diploma" />
      </Picker>

      <Text className="text-lg font-bold mt-4">Program</Text>
      <Picker selectedValue={program} onValueChange={(itemValue) => setProgram(itemValue)}>
        <Picker.Item label="Computer Science" value="Computer Science" />
        <Picker.Item label="Business" value="Business" />
        <Picker.Item label="Engineering" value="Engineering" />
        <Picker.Item label="Medicine" value="Medicine" />
        <Picker.Item label="Arts & Humanities" value="Arts & Humanities" />
      </Picker>

      <Text className="text-lg font-bold mt-4">Specialization</Text>
      <Picker selectedValue={specialization} onValueChange={(itemValue) => setSpecialization(itemValue)}>
        <Picker.Item label="Artificial Intelligence" value="Artificial Intelligence" />
        <Picker.Item label="Gaming" value="Gaming" />
        <Picker.Item label="Software Development" value="Software Development" />
        <Picker.Item label="Hardware" value="Hardware" />
        <Picker.Item label="Cloud Computing" value="Cloud Computing" />
      </Picker>
    </View>
  );
};

export default Filters;
