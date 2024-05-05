//Packages
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Pressable, Text, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import MapScreen from "./src/screens/MapScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChatBotScreen from "./src/screens/ChatBotScreen";
import SplashScreen from "./src/screens/SplashScreen";
import SignIn from "./src/screens/Login/SignIn";
import SignUp from "./src/screens/Login/SignUp";
import ForgotPassword from "./src/screens/Login/ForgotPassword";
import HomeScreen from "./src/screens/HomeScreen";
import CreateRoute from "./src/screens/CreateRoute";
import SearchScreen from "./src/screens/SearchScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import PlacesScreen from "./src/screens/PlacesScreen";
import RoutesScreen from "./src/screens/RoutesScreen";

function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Login Page</Text>
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
                <Text>Screens</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate("HomeScreen")}>
                    <Text>Home Screen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("SearchScreen")}>
                    <Text>Search Screen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("CategoriesScreen")}>
                    <Text>Categories Screen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("PlacesScreen")}>
                    <Text>Places Screen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("RoutesScreen")}>
                    <Text>Routes Screen</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("Map")}>
                    <Text>Maps</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("ChatBotScreen")}>
                    <Text>ChatBot</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("CreateRoute")}>
                    <Text>CreateRoute</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate("ProfileScreen")}>
                    <Text>Profile</Text>
                </Pressable>
            </View>
        </ScrollView>
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
            }}
        >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Atlas AI" component={Home} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
                <Stack.Screen name="PlacesScreen" component={PlacesScreen} />
                <Stack.Screen name="RoutesScreen" component={RoutesScreen} />
                <Stack.Screen name="CreateRoute" component={CreateRoute} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "left",
        justifyContent: "center",
        gap: 16,
        margin: 16,
        paddingTop: 16
    },
    button: {
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fafafa"
    }
});
