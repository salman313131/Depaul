import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const Filters = ({ degree, setDegree, program, setProgram, specialization, setSpecialization }) => {
  const [degreeModalVisible, setDegreeModalVisible] = useState(false);
  const [programModalVisible, setProgramModalVisible] = useState(false);
  const [specializationModalVisible, setSpecializationModalVisible] = useState(false);

  return (
    <View className="flex-row justify-around p-4 mb-5">
      <TouchableOpacity
        onPress={() => setDegreeModalVisible(true)}
        className="flex-row items-center border border-gray-300 p-2 rounded-full"
      >
        <Text className="text-black mr-2">Degree</Text>
        <Icon name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setProgramModalVisible(true)}
        className="flex-row items-center border border-gray-300 p-2 rounded-full"
      >
        <Text className="text-black mr-2">Program</Text>
        <Icon name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSpecializationModalVisible(true)}
        className="flex-row items-center border border-gray-300 p-2 rounded-full"
      >
        <Text className="text-black mr-2">Specialization</Text>
        <Icon name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Degree Modal */}
      <Modal visible={degreeModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-4 rounded-lg w-3/4">
            <Text className="text-lg font-bold">Select Degree</Text>
            <Picker selectedValue={degree} onValueChange={(itemValue) => setDegree(itemValue)}>
              <Picker.Item label="Bachelors" value="Bachelors" />
              <Picker.Item label="Masters" value="Masters" />
              <Picker.Item label="Ph.D" value="Ph.D" />
              <Picker.Item label="Diploma" value="Diploma" />
            </Picker>
            <TouchableOpacity onPress={() => setDegreeModalVisible(false)} className="mt-4">
              <Text className="text-blue-500 text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Program Modal */}
      <Modal visible={programModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-4 rounded-lg w-3/4">
            <Text className="text-lg font-bold">Select Program</Text>
            <Picker selectedValue={program} onValueChange={(itemValue) => setProgram(itemValue)}>
              <Picker.Item label="Computer Science" value="Computer Science" />
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Engineering" value="Engineering" />
              <Picker.Item label="Medicine" value="Medicine" />
              <Picker.Item label="Arts & Humanities" value="Arts & Humanities" />
            </Picker>
            <TouchableOpacity onPress={() => setProgramModalVisible(false)} className="mt-4">
              <Text className="text-blue-500 text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Specialization Modal */}
      <Modal visible={specializationModalVisible} transparent={true} animationType="slide">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-4 rounded-lg w-3/4">
            <Text className="text-lg font-bold">Select Specialization</Text>
            <Picker selectedValue={specialization} onValueChange={(itemValue) => setSpecialization(itemValue)}>
              <Picker.Item label="Artificial Intelligence" value="Artificial Intelligence" />
              <Picker.Item label="Gaming" value="Gaming" />
              <Picker.Item label="Software Development" value="Software Development" />
              <Picker.Item label="Hardware" value="Hardware" />
              <Picker.Item label="Cloud Computing" value="Cloud Computing" />
            </Picker>
            <TouchableOpacity onPress={() => setSpecializationModalVisible(false)} className="mt-4">
              <Text className="text-blue-500 text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filters;
