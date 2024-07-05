import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ModuleCard = ({ title, skills, imageUrl }) => {
  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md">
      <Image source={{ uri: imageUrl }} className="w-full h-40 rounded-lg" />
      <Text className="text-base mt-2">{title}</Text>
      <Text className="text-sm text-gray-600">{skills.join(', ')}</Text>
      <View className="flex-row justify-between mt-4">
        <Button title="Create Report" onPress={() => {}} />
        <Button title="Apply" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ModuleCard;
