import { View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CustomSelect = ({title, items, placeholder, handleChange, otherStyles, ...props}) => {
  return (
     <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-black font-pmedium px-2">{title}</Text>
      <RNPickerSelect
        onValueChange={handleChange}
        items={items}
        placeholder={{ label: placeholder, value: null }}
      />
    </View>
  )
}
export default CustomSelect