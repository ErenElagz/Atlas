import React from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ForgotPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Forgot Password</Text>
            
            <TextInput
                selectionColor={"#000"}
                placeholder="E-mail"
                style={styles.input}></TextInput>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Send Email</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.goBack}>Go Back</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        padding: 20,
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 16
    },
    title: {
        fontSize: 32,
        fontWeight: "800",
        color: "#323232"
    },
    button: {
        backgroundColor: "#323232",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%"
    },
    buttonText: {
        color: "#fff"
    },
    input: {
        backgroundColor: "#fafafa",
        width: "100%",
        fontSize: 14,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12
    },
    goBack: {
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center",
        color: "#969696",
        textDecorationLine: "underline"
    }
});
