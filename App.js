import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "./src/screens/MapScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChatBotScreen from "./src/screens/ChatBotScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SignIn from "./src/screens/Login/SignIn";
import SignUp from "./src/screens/Login/SignUp";
import ForgotPassword from "./src/screens/Login/ForgotPassword";

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Pressable style={styles.button} onPress={() => navigation.navigate("Map")}>
                <Text>Maps</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("ChatBotScreen")}>
                <Text>ChatBot</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("ProfileScreen")}>
                <Text>Profile</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("SplashScreen")}>
                <Text>Splash</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("SignIn")}>
                <Text>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                <Text>Sign Up</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("ForgotPassword")}>
                <Text>Forgot Password</Text>
            </Pressable>
        </View>
    );
}
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer
            theme={{
                colors: {
                    background: "transparent"
                }
            }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Atlas AI" component={HomeScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        margin: 16
    },
    button: {
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fafafa"
    }
});
