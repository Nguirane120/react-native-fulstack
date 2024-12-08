import React from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";

interface CustomButtonProps extends ViewProps {
  title: string; // Le texte affiché dans le bouton
  containerStyles?: string;
  handlePress:VoidFunction // Les classes supplémentaires pour styliser le bouton
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handlePress,
  ...props
}) => (
  <TouchableOpacity onPress={handlePress} {...props} 
  className={`bg-secondary-100
    rounded-xl w-full p-4
    justify-center
    items-center
    min-h-[62px]
    ${containerStyles}`}>
    <Text className="text-white text-lg font-bold">{title}</Text>
  </TouchableOpacity>
);
