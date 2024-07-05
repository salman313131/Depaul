import { Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images"
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-slate-50 h-full">
      <ScrollView contentContainerStyle={{
        height: '100%'
      }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            resizeMode="contain"
            source={images.depaul}
            className="w-[275px] h-[207px]"
          />
          <Text className="text-[28px] text-center font-bold">Welcome to DePaul’s Admission Lounge</Text>
          <Text className="text-[18px] text-center font-normal">
            Every student is unique. In less than 5 minutes, our <Text className="font-bold">AI Admission Advisor</Text> will create a personalized report for you.
          </Text>
          <CustomButton
          title="Get Started"
          handlePress={()=>{
            router.push("/home")
          }}
          containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
