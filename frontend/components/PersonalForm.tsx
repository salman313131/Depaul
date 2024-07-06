import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';

const PersonalForm = ({ data, setData }) => {
  return (
    <ScrollView className="p-4 pt-8 bg-white">
      <View>
        <Text className="text-lg mb-2">First Name</Text>
        <TextInput
          value={data.firstName}
          onChangeText={(text) => setData({ ...data, firstName: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Last Name</Text>
        <TextInput
          value={data.lastName}
          onChangeText={(text) => setData({ ...data, lastName: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Email</Text>
        <TextInput
          value={data.email}
          onChangeText={(text) => setData({ ...data, email: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Phone Number</Text>
        <TextInput
          value={data.phoneNumber}
          onChangeText={(text) => setData({ ...data, phoneNumber: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Country of Residence</Text>
        <TextInput
          value={data.countryOfResidence}
          onChangeText={(text) => setData({ ...data, countryOfResidence: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Citizenship</Text>
        <TextInput
          value={data.citizenship}
          onChangeText={(text) => setData({ ...data, citizenship: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg mb-2">Preferred Languages</Text>
        <TextInput
          value={data.preferredLanguages}
          onChangeText={(text) => setData({ ...data, preferredLanguages: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View>
        <Text className="text-lg my-4 font-bold">Social Media</Text>
    </View>

      <View>
        <Text className="text-lg mb-2">LinkedIn</Text>
        <TextInput
          value={data.linkedIn}
          onChangeText={(text) => setData({ ...data, linkedIn: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>

      <View className="pb-8">
        <Text className="text-lg mb-2">Instagram</Text>
        <TextInput
          value={data.instagram}
          onChangeText={(text) => setData({ ...data, instagram: text })}
          className="border border-[#1C1C1C] rounded p-2 mb-4 h-12 text-base"
        />
      </View>
    </ScrollView>
  );
};

export default PersonalForm;
