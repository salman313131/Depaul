import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ModuleCard from './ModuleCard';

const ProgramCard = ({ title, modules }) => {
  return (
    <View className="mb-5">
      <Text className="text-2xl font-bold mb-2">{title}</Text>
      <FlatList
        horizontal
        data={modules}
        renderItem={({ item }) => (
          <ModuleCard
            title={item.title}
            skills={item.skills}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProgramCard;
