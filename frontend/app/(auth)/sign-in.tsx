import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "@/constants/images"
import FormField from '@/components/FormField'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm]=useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] =useState(false);

  const submit=()=>{

  }
  return (
    <SafeAreaView className="bg-slate-50 h-full px-4">
      <ScrollView>
        <View className="w-full justify-center items-center px-4">
          <Image source={images.depaul}
          className="w-[171px] h-[128px] mt-4"
          />
          <Text className="text-center font-bold text-[28px]">Welcome Back!</Text>
          <Text className="text-center font-medium text-[16px]">Let’s get you started</Text>
        </View>
        <FormField
        title="Email"
        value={form.email}
        placeholder="Enter your email"
        handleChangeText={(e)=>{
          setForm({...form, email: e})
        }}
        otherStyles="mt-7"
        keyboardType="email-address"
        />
        <FormField
        title="Password"
        value={form.password}
        placeholder="Enter your password"
        handleChangeText={(e)=>{
          setForm({...form, password: e})
        }}
        otherStyles="mt-7"
        />
        <Text className="text-[#1C1C1C] text-[14px] text-medium text-right">forgot password?</Text>
        <CustomButton 
        title="Sign In"
        handlePress={submit}
        containerStyle="mt-7"
        isLoading={isSubmitting}
        />
        <View className="justify-center items-center pt-4">
          <Text>Don’t have an account? <Link 
          href='/sign-up'
          className='text-blue-700 font-bold'
          >Sign Up</Link></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn