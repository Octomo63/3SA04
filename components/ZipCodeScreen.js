import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Pathum thani', code: '12120' },
    
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
            <View style={styles.center} >
            <Text style={styles.font}>{place}</Text>
            <Text style={styles.font}>{code}</Text>
            </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('../map.gif')} style={styles.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        width: '80%',
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    font: {
        marginTop: 32,
        fontSize: 23,
        color: 'blue',
    },
})