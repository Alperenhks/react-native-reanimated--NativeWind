import { View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated ,{ FadeIn,FadeInDown,FadeInUp, FadeOut } from "react-native-reanimated";

export default function LoginScreen({navigation}) {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require("../assets/background.png")}/>
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()} className="h-[225] w-[90]" source={require("../assets/light.png")}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} className="h-[160] w-[65]" source={require("../assets/light.png")}/>
      </View>

      {/* title and more */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text 
          entering={FadeInUp.duration(1000).springify()}
          className="text-white font-bold tracking-wider text-5xl">
            Login 
          </Animated.Text> 
        </View>
 
        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
          className="bg-black/5 p-5 rounded-2xl w-full">
             <TextInput placeholder="username"/>
          </Animated.View>
          <Animated.View 
          entering={FadeInDown.delay(400).duration(1000).springify()}
          className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder="password" secureTextEntry/>
          </Animated.View>
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                <Text className=" text-xl font-bold text-white text-center">Login</Text>
            </TouchableOpacity>
          </View>
          <Animated.View 
          entering={FadeInDown.delay(600).duration(1000).springify()}
          className="flex-row justify-center">
            <Text>Dont't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="text-sky-600">SingUP</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
