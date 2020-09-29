import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const availableZipItems = [
    { place: 'Songkhla', code: '90000' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Pathum Thani', code: '12120' },
    
]
const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
            <View style={styles.center}  >
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
            <View style = {styles.box}>  
                <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
            </View>
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
        height: '100%',
    },
    font: {
        marginTop: 32,
        fontSize: 23,
        color: '#000000',
    },
    box: {
        backgroundColor: 'white',        
        width: '95%',
        height: '95%',
        opacity: 0.7,
        alignItems: 'center',
    },
})