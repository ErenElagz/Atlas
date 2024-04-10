import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Dimensions,
    Pressable,
    TextInput
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Forgot Password</Text>
                </View>
            </View>

            <View>
                <View style={{ paddingHorizontal: 32, marginTop: 32, gap: 8 }}>
                    <TextInput
                        placeholder="E-mail"
                        style={styles.input}
                        selectionColor={"#323232"}
                    ></TextInput>
                </View>
                <View style={styles.sign}>
                    <Pressable style={styles.sign2}>
                        <Text style={styles.text2}>Send Email</Text>
                    </Pressable>
                </View>

                <View>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: "600",
                            textAlign: "center",
                            marginTop: 24,
                            color: "#969696"
                        }}
                    >
                        Go Back
                    </Text>
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
    },
    logo2: {
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
        padding: 20,
        width: "100%",
        gap: 8,
        alignSelf: "center"
    },
    sign2: {
        backgroundColor: "#323232",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        flexGrow: 1
    },
    text1: {
        fontSize: 14,
        width: "100%",
        textAlign: "center"
    },
    text2: {
        fontSize: 14,
        color: "#fff",
        width: "100%",
        textAlign: "center"
    },
    orView: {
        flexDirection: "row",
        paddingHorizontal: 48,
        alignItems: "center",
        gap: 16,
        paddingVertical: 4
    },
    or: { fontSize: 12, color: "#bbb" },
    div: { flexGrow: 1, backgroundColor: "#eee", height: 1.5 },
    google: {
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 32,
        gap: 16,
        textAlign: "center"
    },
    facebook: {
        backgroundColor: "#1877F2",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 32,
        width: "100%",
        flexDirection: "row",
        gap: 16,
        textAlign: "center",
        paddingHorizontal: 32
    },
    thirdView: {
        paddingHorizontal: 24,
        alignItems: "center",
        gap: 8,
        paddingTop: 12
    },
    input: {
        backgroundColor: "#fafafa",
        width: "100%",
        fontSize: 14,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12
    }
});