import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const CustomDrawerContent = ({ navigation }) => {
  const [housingExpanded, setHousingExpanded] = useState(false);
  const [campusHousingExpanded, setCampusHousingExpanded] = useState(false);
  //const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <TouchableOpacity onPress={() => navigation.closeDrawer()} className="my-6 self-end">
        <Ionicons name="close-circle-outline" size={28} className="text-gray-600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Campus')} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Campus</Text>
        <Feather name="arrow-right" size={20} className="text-gray-600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setHousingExpanded(!housingExpanded)} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Housing</Text>
        <Feather name={housingExpanded ? "chevron-up" : "chevron-down"} size={20} className="text-gray-600" />
      </TouchableOpacity>
      {housingExpanded && (
        <>
          <TouchableOpacity onPress={() => setCampusHousingExpanded(!campusHousingExpanded)} className="flex-row justify-between items-center pl-4 my-2">
            <Text className="text-lg text-gray-700">Campus Housing</Text>
            <Feather name={campusHousingExpanded ? "chevron-up" : "chevron-down"} size={20} className="text-gray-600" />
          </TouchableOpacity>
          {campusHousingExpanded && (
            <>
              <TouchableOpacity onPress={() => handleNavigation('ResidenceHalls')} className="flex-row justify-between items-center pl-8 my-2">
                <Text className="text-lg text-gray-700">Residence Halls</Text>
                <Feather name="arrow-right" size={20} className="text-gray-600" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('UniversityOwnedApartments')} className="flex-row justify-between items-center pl-8 my-2">
                <Text className="text-lg text-gray-700">University Owned Apartments</Text>
                <Feather name="arrow-right" size={20} className="text-gray-600" />
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity onPress={() => setCampusMealsExpanded(!campusMealsExpanded)} className="flex-row justify-between items-center pl-4 my-2">
            <Text className="text-lg text-gray-700">Campus Meals</Text>
            <Feather name={campusMealsExpanded ? "chevron-up" : "chevron-down"} size={20} className="text-gray-600" />
          </TouchableOpacity>
          {campusMealsExpanded && (
            <>
              <TouchableOpacity onPress={() => handleNavigation('FoodMenu')} className="flex-row justify-between items-center pl-8 my-2">
                <Text className="text-lg text-gray-700">Food Menu</Text>
                <Feather name="arrow-right" size={20} className="text-gray-600" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleNavigation('DiningLocations')} className="flex-row justify-between items-center pl-8 my-2">
                <Text className="text-lg text-gray-700">Dining Locations</Text>
                <Feather name="arrow-right" size={20} className="text-gray-600" />
              </TouchableOpacity>
            </>
          )}
        </>
      )}
      <TouchableOpacity onPress={() => handleNavigation('Scholarships')} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Scholarships</Text>
        <Feather name="arrow-right" size={20} className="text-gray-600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Visa')} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Visa</Text>
        <Feather name="arrow-right" size={20} className="text-gray-600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('CareerCenter')} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Career Center</Text>
        <Feather name="arrow-right" size={20} className="text-gray-600" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Settings')} className="flex-row justify-between items-center my-2">
        <Text className="text-lg text-gray-800">Settings</Text>
        <Feather name="arrow-right" size={20} className="text-gray-600" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;
