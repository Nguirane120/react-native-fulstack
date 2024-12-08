import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, name, color, focused}) =>{
    return(
        <View className='items-center justify-center w-full gap-2'>
            <Image source={icon} resizeMode='contain' tintColor={color} 
            className='w-6 h-6'/>
            <Text className='text-sm text-white'>{name}</Text>
        </View>
    )
}

export default function TabLayout() {
  return (
   <>
    <Tabs 
    screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#FFA001",
        tabBarInactiveTintColor:"#CDCDE0",
        tabBarStyle:{
            width:"auto",
            backgroundColor:"#161622",
            borderTopWidth:1,
            borderTopColor:"#232533",
            height:84
        }
    }}
    >
        <Tabs.Screen 
    
        name='home'
        options={{
            headerShown:false,
            title:"Home",
            tabBarIcon:({color, focused}) =>(
                <TabIcon
                color={color}
                name="Home"
                focused={focused}
                icon={icons.home}
                />
            )
        }}
        />
             <Tabs.Screen 
        name='bookmar'
        options={{
            headerShown:false,
            title:"bookmar",
            tabBarIcon:({color, focused}) =>(
                <TabIcon
                color={color}
                name="Bookmark"
                focused={focused}
                icon={icons.bookmark}
                />
                
            )
        }}
        />
        <Tabs.Screen 
        name='create'
        options={{
            headerShown:false,
            title:"Create",
            tabBarIcon:({color, focused}) =>(
                <TabIcon
                color={color}
                name="Create"
                focused={focused}
                icon={icons.plus}
                />
                
            )
        }}
        />
          <Tabs.Screen 
        name='profile'
        options={{
            headerShown:false,
            title:"profile",
            tabBarIcon:({color, focused}) =>(
                <TabIcon
                color={color}
                name="Profile"
                focused={focused}
                icon={icons.profile}
                />
                
            )
        }}
        />
    </Tabs>
   </>
  )
}