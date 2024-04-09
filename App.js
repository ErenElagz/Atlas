import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./src/screens/MapScreen";
import { StatusBar } from "expo-status-bar";
import ProfileScreen from "./src/screens/ProfileScreen";
import ChatBotScreen from "./src/screens/ChatBotScreen";
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Map")}
            >
                <Text>Go to Maps</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ChatBotScreen")}
            >
                <Text>Go to ChatBot Screen</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ProfileScreen")}
            >
                <Text>Go to Profile Screen</Text>
            </Pressable>
        </View>
    );
}
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Atlas AI" component={HomeScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
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
        borderRadius: 16,
        width: "90%",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fafafa",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowOpacity: 20,
        shadowRadius: 20.0,
        elevation: 6
    }
});
