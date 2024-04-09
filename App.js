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
                <Text style={styles.text}>Go to Maps</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ChatBotScreen")}
            >
                <Text style={styles.text}>Go to ChatBot Screen</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("ProfileScreen")}
            >
                <Text style={styles.text}>Go to Profile Screen</Text>
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
        borderRadius: 12,
        width: "92%",
        alignItems: "center",
        padding: 20,
        borderWidth:1,
        borderColor:"#ddd"
    },text:{
        color:"#969696",
        fontWeight:"600"
    }
});
