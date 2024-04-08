import React from "react";
import IstanbulData from "../apis/places.json";
import { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

export default function MarkerComponentCallout({ setData }) {
    const sendData = () => {
        const data = [];
        setData(data);
    };

    const destinations = IstanbulData.destination.best_destinations;

    return (
        <>
            {destinations.map((destination, index) => (
                <Marker
                    style={styles.marker}
                    key={index}
                    coordinate={destination}
                    title={destination.name}
                    onPress={() => {
                        setData(destination);
                        sendData;
                    }}
                ></Marker>
            ))}
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
