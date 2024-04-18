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
import Routes from "../../apis/routes.json";
import { SvgUri } from "react-native-svg";

export default function PopularRoutes() {
    const route = Routes.routes;

    return (
        <View style={{ marginTop: 32, gap: 8 }}>
            <View
                style={{
                    flexDirection: "row",
                    gap: 4,
                    paddingHorizontal: 16,
                    alignItems: "center"
                }}
            >
                <SvgUri
                    width={36}
                    height={36}
                    uri={"https://www.svgrepo.com/show/528562/route.svg"}
                />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>Popular Routes</Text>
                    <Text style={{ fontSize: 12, fontWeight: "500" }}>
                        Recommended Routes in the Community
                    </Text>
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", gap: 8, paddingLeft: 16 }}>
                    {route.map((route, index) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.gallery}>
                                <View>
                                    <Image
                                        style={{
                                            width: 200,
                                            height: 200,
                                            borderRadius: 16
                                        }}
                                        source={require("../../assets/img/img.jpg")}
                                    />
                                </View>
                                <View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-evenly",
                                            marginTop: 12
                                        }}
                                    >
                                        <Text style={styles.text}>{route["origin"]}</Text>
                                        <SvgUri
                                            width={20}
                                            height={20}
                                            opacity={0.75}
                                            uri={
                                                "https://www.svgrepo.com/show/528381/map-arrow-right.svg"
                                            }
                                        />
                                        <Text style={styles.text}>{route["destination"]}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-around",
                                            marginTop: 8
                                        }}
                                    >
                                        <View
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginTop: 8
                                            }}
                                        >
                                            <SvgUri
                                                width={24}
                                                height={24}
                                                opacity={0.75}
                                                uri={
                                                    "https://www.svgrepo.com/show/528597/signpost-2.svg"
                                                }
                                            />
                                            <Text style={styles.text2}>
                                                {route["distance"]}
                                                <Text> Km</Text>
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginTop: 8
                                            }}
                                        >
                                            <SvgUri
                                                width={24}
                                                height={24}
                                                opacity={0.75}
                                                uri={"https://www.svgrepo.com/show/527909/star.svg"}
                                            />
                                            <Text style={styles.text2}>{route["rating"]}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    icon: { width: 24, height: 24 },
    text: { fontSize: 14, fontWeight: "600" },
    text2: { fontSize: 12, fontWeight: "600" },
    gallery: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 20,
        overflow: "hidden",
        paddingBottom: 16
    },
});
