import { Link, router } from "expo-router";
import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from ".././constants";
import { CustomButton } from "@/components/CustomButon";
import { StatusBar } from "expo-status-bar";
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="w-full max-w-[380px] h-[300px]"
          />
          <View className="mt-5 ">
            <Text className="text-white text-4xl text-center font-bold">
              Discover Endles possiblities with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute -bottom-1 -right-8"
            />
          </View>
          <Text className="text-gray-200 mt-7 text-center font-bold">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
  title="Continue with email"
  containerStyles="mt-4 "
  handlePress={() => router.push("/sign-in")}
/>

        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
};

export default HomeScreen;
