import React from "react";
import { View, StyleSheet, Text, Image, Pressable, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Create an Account</Text>
            <View style={styles.view}>
                <TextInput
                    selectionColor={"#000"}
                    placeholder="Username"
                    style={styles.input}></TextInput>
                <TextInput
                    selectionColor={"#000"}
                    placeholder="E-mail"
                    inputMode="email"
                    style={styles.input}></TextInput>
                <TextInput
                    selectionColor={"#000"}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}></TextInput>
                <TextInput
                    selectionColor={"#000"}
                    placeholder="Re-Password"
                    secureTextEntry={true}
                    style={styles.input}></TextInput>
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.orView}>
                <View style={styles.div}></View>
                <Text style={styles.or}>or</Text>
                <View style={styles.div}></View>
            </View>

            <View style={styles.view}>
                <Pressable style={[styles.thirdPart, { backgroundColor: "#fafafa" }]}>
                    <Image
                        style={styles.icon}
                        source={require("../../assets/icons/google.png")}
                    />
                    <Text>Sign up Google</Text>
                </Pressable>

                <Pressable style={[styles.thirdPart, { backgroundColor: "#1877f2" }]}>
                    <Image
                        style={styles.icon}
                        source={require("../../assets/icons/facebook.png")}
                    />
                    <Text style={{ color: "#fff" }}>Sign up Facebook</Text>
                </Pressable>
            </View>

            <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.text}>Already have an account?</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        padding: 16,
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 20
    },
    view: { gap: 12, width: "100%" },
    title: {
        fontSize: 32,
        fontWeight: "800",
        color: "#323232"
    },
    icon: {
        width: 20,
        height: 20
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
    orView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 16
    },
    or: { fontSize: 12, color: "#bbb" },
    div: { flexGrow: 1, backgroundColor: "#ddd", height: 1 },
    thirdPart: {
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        gap: 16
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        color: "#969696",
        textDecorationLine: "underline"
    }
});
