import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';

const InterestsForm = ({ data, setData }) => {
  return (
    <ScrollView className="p-4 py-8 bg-white">
      <View>
        <Text className="text-lg mb-2">Degree</Text>
        <TextInput
          value={data.degree}
          onChangeText={(text) => setData({ ...data, degree: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Program</Text>
        <TextInput
          value={data.program}
          onChangeText={(text) => setData({ ...data, program: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Major</Text>
        <TextInput
          value={data.major}
          onChangeText={(text) => setData({ ...data, major: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Year of Intake</Text>
        <View className="flex-row mb-4">
          <TextInput
            placeholder="Month"
            value={data.yearOfIntakeMonth}
            onChangeText={(text) => setData({ ...data, yearOfIntakeMonth: text })}
            className="border border-[#1C1C1C] rounded p-2 h-12 text-base mr-2 flex-1"
          />
          <TextInput
            placeholder="Year"
            value={data.yearOfIntakeYear}
            onChangeText={(text) => setData({ ...data, yearOfIntakeYear: text })}
            className="border border-[#1C1C1C] rounded p-2 h-12 text-base flex-1"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default InterestsForm;
