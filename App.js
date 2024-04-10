import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./src/screens/MapScreen";
import { StatusBar } from "expo-status-bar";
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
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Map")}
            >
                <Text style={styles.text}>Maps</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ChatBotScreen")}
            >
                <Text style={styles.text}>ChatBot</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ProfileScreen")}
            >
                <Text style={styles.text}>Profile</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("SplashScreen")}
            >
                <Text style={styles.text}>Splash</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("SignIn")}
            >
                <Text style={styles.text}>SignIn</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("SignUp")}
            >
                <Text style={styles.text}>SignUp</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ForgotPassword")}
            >
                <Text style={styles.text}>ForgotPassword</Text>
            </Pressable>
        </View>
    );
}
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
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
        gap: 16,
        backgroundColor: "#fff"
    },
    button: {
        borderRadius: 12,
        width: "92%",
        alignItems: "center",
        padding: 20,
        borderWidth: 1,
        borderColor: "#ddd"
    },
    text: {
        color: "#969696",
        fontWeight: "600"
    }
});
