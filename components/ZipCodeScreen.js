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
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
            <View style={styles.center} >
            <Text>{place}</Text>
            <Text>{code}</Text>
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
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
})