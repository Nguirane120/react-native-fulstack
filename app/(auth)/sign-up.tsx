import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { CustomButton } from '@/components/CustomButon';
import FormField from '@/components/FormField';
import { images } from '../../constants'

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
    <ScrollView>
      <View className="w-full justify-center min-h-[30vh] px-4 my-6">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[35px] "
        />
        <Text className="text-white text-2xl text-semibold mt-10">
          Log in to Aora
        </Text>
      </View>

      <FormField
        inputName="Username"
        handleChange={(e) => {
          setForm({ ...form, username: e });
        }}
        placeholder="Username"
        value={form.username}
        keyboardType="text"
        otherStyle={""}
      />

      <FormField
        inputName="Email adress"
        handleChange={(e) => {
          setForm({ ...form, email: e });
        }}
        placeholder="Email@email.com"
        value={form.email}
        keyboardType=""
        otherStyle="my-3"
      />
       <FormField
        inputName="Password"
        handleChange={(e) => {
          setForm({ ...form, password: e });
        }}
        placeholder="Password"
        value={form.password}
        keyboardType=""
        otherStyle="my-3"
      />

      <View className="px-4">
        <CustomButton
          title="Sign Up"
          handlePress={() => {}}
          containerStyles="mt-3"
        />
        <View className="flex-row justify-center pt-5 gap-2">
          <Text className="text-white">
            Alrady have an account ? {" "}
            <Link href="/sign-in" className="text-secondary-100">
              Log In
            </Link>{" "}
          </Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})