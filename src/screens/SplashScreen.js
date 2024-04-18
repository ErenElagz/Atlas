import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import AnimatedSVG from "../components/animation/logo";

export default function SplashScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <View style={styles.header}>
                <AnimatedSVG />
                    <Text style={styles.title}>Atlas</Text>
                </View>
                <Text style={styles.slogan}>AI Powered Route & Trip Planner</Text>
            </View>

            <Image style={styles.img} source={require("../assets/img/splashscreen.png")} />

            <View style={styles.buttonView}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#323232" }]}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fafafa" }]}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={[styles.buttonText, { color: "#000" }]}>Sign Up</Text>
                </Pressable>
            </View>

            <View style={styles.orView}>
                <View style={styles.div}></View>
                <Text style={styles.or}>or</Text>
                <View style={styles.div}></View>
            </View>

            <View style={styles.view}>
                <Pressable style={[styles.thirdPart, { backgroundColor: "#fafafa" }]}>
                    <Image style={styles.icon} source={require("../assets/icons/google.png")} />
                    <Text>Continue with Google</Text>
                </Pressable>

                <Pressable style={[styles.thirdPart, { backgroundColor: "#1877f2" }]}>
                    <Image style={styles.icon} source={require("../assets/icons/facebook.png")} />
                    <Text style={{ color: "#fff" }}>Continue with Facebook</Text>
                </Pressable>
            </View>

            <Text style={[styles.slogan]}>
                When you logging in to the Atlas. You accepting Our Terms and Conditions.
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 16
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 32,
        gap: 4,
        justifyContent: "center"
    },
    title: { fontSize: 32, fontWeight: "700" },
    logo: { width: 32, height: 32 },
    slogan: { fontSize: 12, color: "#aaa", fontWeight: "500", textAlign: "center" },
    img: { width: Dimensions.get("window").width, height: Dimensions.get("window").width },
    icon: { width: 20, height: 20 },
    text: { fontSize: 14, width: "100%" },

    view: { gap: 12, width: "100%" },
    thirdPart: {
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        gap: 16
    },

    orView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 16
    },
    or: { fontSize: 12, color: "#bbb" },
    div: { flexGrow: 1, backgroundColor: "#ddd", height: 1 },

    buttonView: { gap: 8, flexDirection: "row" },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        flexGrow: 1
    },
    buttonText: { color: "#fff" }
});
