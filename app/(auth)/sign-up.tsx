import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "@/constants/images"
import FormField from '@/components/FormField'
import { useState } from 'react'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import CustomSelect from '@/components/CustomSelect'
import data from "@/data/data"
const SignUp = () => {
  const [form, setForm]=useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    number: '',
    gender :'',
    dob:'',
    country:'',
    state:'',
    city:'',
    citizenship:'',
    languages:[],
  })

  const [isSubmitting, setIsSubmitting] =useState(false);

  const submit=()=>{

  }
  return (
    <SafeAreaView className="bg-slate-50 h-full px-4">
      <ScrollView>
        <View className="w-full mt-4 flex flex-row justify-between">
          <Image source={images.personal}
          className="w-[117.37px] h-[117.37px]"
          />
          <View className="justify-center items-center mr-4">
            <Text className="text-[#000000] text-[24px] font-medium">Personal Details</Text>
            <Text className="text-[#7B7B7B] text-[16px] font-normal">Next: Academic Interest</Text>
          </View>
        </View>
        <FormField
        title="Firstname"
        value={form.firstname}
        placeholder="gaurav"
        handleChangeText={(e)=>{
          setForm({...form, firstname: e})
        }}
        otherStyles="mt-6"
        label="FirstName"
        />
        <FormField
        title="Lastname"
        value={form.lastname}
        placeholder="verma"
        handleChangeText={(e)=>{
          setForm({...form, lastname: e})
        }}
        otherStyles="mt-7"
        label="FirstName"
        />
        <FormField
        title="Email"
        value={form.email}
        placeholder="gaurav@gmail.com"
        handleChangeText={(e)=>{
          setForm({...form, email: e})
        }}
        otherStyles="mt-7"
        keyboardType="email-address"
        label="Email"
        />
        <FormField
        title="Password"
        value={form.password}
        placeholder="Enter your password"
        handleChangeText={(e)=>{
          setForm({...form, password: e})
        }}
        otherStyles="mt-7"
        label="Password"
        />
        <CustomSelect
        title="Gender"
        placeholder="Female"
        items={data.gender}
        handleChange={(e)=>{
          setForm({...form, gender: e})
        }}
        otherStyles="mt-7"
        />
        <CustomButton 
        title="Sign Up"
        handlePress={submit}
        containerStyle="mt-7"
        isLoading={isSubmitting}
        />
        <View className="justify-center items-center pt-4">
          <Text>Already have an account? <Link 
          href='/sign-in'
          className='text-blue-700 font-bold'
          >Sign In</Link></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp