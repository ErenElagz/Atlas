import React from "react";
import IstanbulData from "../../apis/places.json";
import { Marker } from "react-native-maps";

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
                    key={index}
                    coordinate={destination}
                    title={destination.name}
                    onPress={() => {
                        setData(destination);
                        sendData;
                    }}></Marker>
            ))}
        </>
    );
}
