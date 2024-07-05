import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import  icons from '@/constants/icons'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`}
            style={{color:color}}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0096FF",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
            backgroundColor: "#F2F2F2",
            borderTopWidth: 1,
            borderTopColor: "#D3D3D3",
            height: 84,
        }
    }} 
    >
        <Tabs.Screen 
            name="home" 
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Home"
                    icon={icons.home}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="report" 
            options={{
                title: 'Reports',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Reports"
                    icon={icons.report}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="advisors" 
            options={{
                title: 'Advisors',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Advisors"
                    icon={icons.advisors}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="apply" 
            options={{
                title: 'Apply',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Apply"
                    icon={icons.apply}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
             <Tabs.Screen 
            name="profile" 
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon:({color,focused})=>(
                    <TabIcon
                    name="Profile"
                    icon={icons.profile}
                    color={color}
                    focused={focused}
                    /> 
                )
            }}
            />
    </Tabs>
  )
}
export default TabsLayout
