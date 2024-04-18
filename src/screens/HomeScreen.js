import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import PopularRoutes from "../components/home/PopularRoutes";
import Categories from "../components/home/Categories";
import AnimatedSVG from "../components/animation/svg";
export default function HomeScreen() {
    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <StatusBar style="auto" backgroundColor="#fff" />
            <View style={styles.header}>
                <View style={styles.topBar}>
                    <View style={styles.logo}>
                        <AnimatedSVG />
                    </View>
                    <Text style={styles.title}>Atlas</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#f5f5f5",
                        width: 48,
                        height: 48,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Image
                        style={{ width: "100%", height: "100%" }}
                        source={require("../assets/img/pp.jpg")}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ gap: 8, marginTop: 16 }}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search City, route and more..."
                        style={styles.input}
                        selectionColor={"#323232"}
                    ></TextInput>
                    <TouchableOpacity>
                        <Image source={require("../assets/icons/search.png")} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Categories />
                </View>
            </View>
            <PopularRoutes />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, gap: 16, paddingVertical: 48, overflow: "visible" },
    topBar: { flexDirection: "row", alignItems: "center", gap: 2 },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    title: { fontSize: 32, fontWeight: "800", fontFamily: "CalSans-SemiBold" },
    icon: { width: 24, height: 24 },
    logo: { width: 32, height: 32 },

    input: { flex: 1, fontSize: 14 },
    searchBar: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        paddingHorizontal: 20,
        gap: 8,
        borderRadius: 24,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: "#efefef"
    }
});
