import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    Pressable
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require("../assets/img/logo.png")}
                    />
                    <Text style={styles.title}>Atlas AI</Text>
                </View>
                <Text style={styles.slogan}>
                    AI Powered Route & Trip Planner
                </Text>
            </View>

            <Image
                style={styles.img}
                source={require("../assets/img/splashscreen.png")}
            />

            <View>
                <View style={styles.sign}>
                    <Pressable style={styles.sign2}>
                        <Text style={styles.text2}>Sign In</Text>
                    </Pressable>
                    <Pressable style={styles.sign1}>
                        <Text style={styles.text1}>Sign Up</Text>
                    </Pressable>
                </View>
                <View style={styles.orView}>
                    <View style={styles.div}></View>
                    <Text style={styles.or}>or</Text>
                    <View style={styles.div}></View>
                </View>
                <View style={styles.thirdView}>
                    <Pressable style={styles.google}>
                        <Image
                            style={styles.logo2}
                            source={require("../assets/icons/google.png")}
                        />
                        <Text style={styles.text1}>Sign with Google</Text>
                    </Pressable>
                    <Pressable style={styles.facebook}>
                        <Image
                            style={styles.logo2}
                            source={require("../assets/icons/facebook.png")}
                        />
                        <Text style={styles.text2}>Sign with Facebook</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        alignItems: "center",
        backgroundColor: "#fff",
        gap: 8
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 32,
        gap: 4
    },
    title: {
        fontSize: 32,
        fontWeight: "700"
    },
    logo: {
        width: 32,
        height: 32
    },    logo2: {
        width: 24,
        height: 24
    },
    slogan: {
        fontSize: 14,
        color: "#aaa"
    },
    img: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width,
        aspectRatio: "1/1"
    },
    button: {},
    sign: {
        flexDirection: "row",
        padding: 16,
        width: "100%",
        gap: 8
    },
    sign1: {
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 32,
        flexGrow: 1
    },
    sign2: {
        backgroundColor: "#323232",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderRadius: 32,
        flexGrow: 1
    },
    text1: {
        fontSize: 14
    },
    text2: {
        fontSize: 14,
        color: "#fff"
    },
    orView: {
        flexDirection: "row",
        paddingHorizontal: 32,
        alignItems: "center",
        gap: 16
    },
    or: { fontSize: 14, color: "#bbb" },
    div: { flexGrow: 1, backgroundColor: "#eee", height: 1.5 },
    google: {
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        gap: 16
    },
    facebook: {
        backgroundColor: "#1877F2",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        gap: 16
    },
    thirdView: {
        paddingHorizontal: 32,
        alignItems: "center",
        gap: 8,
        paddingTop: 12
    }
});
