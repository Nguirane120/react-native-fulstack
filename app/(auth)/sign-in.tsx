import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import { CustomButton } from "@/components/CustomButon";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[30vh]  px-4 my-6">
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
            setForm({ ...form, email: e });
          }}
          placeholder="Email adress"
          value={form.email}
          keyboardType="email"
          otherStyle={""}
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
        <View className="flex-row justify-end my-3 mr-4">
          <Text className="text-white">Forgot password</Text>
        </View>
        <View className="px-4">
          <CustomButton
            title="Log in"
            handlePress={() => {}}
            containerStyles=""
          />
          <View className="flex-row justify-center pt-5">
            <Text className="text-white">
              Don't have an account ?{" "}
              <Link href="/sign-up" className="text-secondary-100">
                Sign Up
              </Link>{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
