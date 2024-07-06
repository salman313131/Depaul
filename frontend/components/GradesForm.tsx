import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';

const GradesForm = ({ data, setData }) => {
  return (
    <ScrollView className="p-4 py-8 bg-white">
      <View>
        <Text className="text-lg mb-2">Test Attempted</Text>
        <TextInput
          value={data.testAttempted}
          onChangeText={(text) => setData({ ...data, testAttempted: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Obtained Score</Text>
        <TextInput
          value={data.obtainedScore}
          onChangeText={(text) => setData({ ...data, obtainedScore: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Other Tests Attempted</Text>
        <TextInput
          value={data.otherTestsAttempted}
          onChangeText={(text) => setData({ ...data, otherTestsAttempted: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Other Obtained Score</Text>
        <TextInput
          value={data.otherObtainedScore}
          onChangeText={(text) => setData({ ...data, otherObtainedScore: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>
    </ScrollView>
  );
};

export default GradesForm;
