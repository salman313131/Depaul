import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ModuleCard = ({ title, skills, imageUrl }) => {
  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-md w-60 mr-4">
      <Image source={{ uri: imageUrl }} className="w-full h-40 rounded-lg" />
      <Text className="text-base mt-2 truncate">{title}</Text>
      <Text numberOfLines={1} className="text-sm text-gray-600 truncate">{skills.join(', ')}</Text>
      <View className="flex-column mt-4 space-y-2">
        <TouchableOpacity
          className="bg-[#0B60A3] py-2 rounded-lg items-center"
          onPress={() => {}}
        >
          <Text className="text-white">Create Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border border-[#0B60A3] py-2 rounded-lg items-center"
          onPress={() => {}}
        >
          <Text className="text-[#0B60A3]">Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModuleCard;
