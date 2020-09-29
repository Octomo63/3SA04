import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default function Forecast(props) {

    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{marginTop: 20}}>
                <Text>
                    <Text style={styles.big}>{props.temp}  </Text>
                    <Text style={styles.medium}>°C</Text>
                </Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>
                    <Text style={styles.medium}>Wind</Text>
                    <Text style={styles.wind}> {props.wind} </Text>
                    <Text style={styles.medium}>Meter/Sec</Text>
                </Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>
                    <Text style={styles.medium}>Wind Direction</Text>
                    <Text style={styles.wind}> {props.winddeg} </Text>
                    <Text style={styles.medium}>Degrees</Text>
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        marginTop: 20,
        fontSize: 30,
        color: 'white',
    },
    medium: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    },
    wind:{
        marginTop: 20,
        fontSize: 25,
        color: 'white',
    }
})