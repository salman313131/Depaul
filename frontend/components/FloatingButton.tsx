import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FloatingButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('screens/chat');
  };

  return (
    <View className="absolute bottom-24 right-4">
      <TouchableOpacity onPress={handlePress}>
        <ImageBackground
          source={require('../assets/images/iris.png')}
          style={{ width: 96, height: 96 }}
          imageStyle={{ borderRadius: 32 }}
          className="items-center justify-center"
        >
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
