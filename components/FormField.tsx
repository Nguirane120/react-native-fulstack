import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

export default function FormField({handleChange, value, placeholder, keyboardType, inputName, otherStyle}) {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={` px-4 ${otherStyle}`}>
    <Text className='text-white mb-3'>{inputName}</Text>
    <TextInput
        className={`flex-1 border-2 border-black-200 rounded-2xl w-full 
        h-16 bg-black-100  focus:border-secondary-100 items-center `}
          onChangeText={handleChange}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor="text-gray-100"
          placeholderClassName='text-sm'
          secureTextEntry={inputName === "Password" && !showPassword}
        />
        {
            inputName === "Password" &&(
                <TouchableOpacity className='absolute -bottom-1 -right-1 mr-5'
                 onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-10 mr-2' resizeMode='contain'/>
                </TouchableOpacity>
            )
        }
    </View>
  )
}