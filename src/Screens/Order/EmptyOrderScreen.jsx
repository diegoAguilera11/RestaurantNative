import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Cart from '../../img/basket.png'
import { styles } from '../../themes/customStyles'
import { useNavigation } from '@react-navigation/core'
export const EmptyOrderScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 100, height: 100 }} source={Cart} />
            <Text style={{ color: '#000', fontSize: 30 }}>Oops :(</Text>
            <Text style={{ color: '#000', fontSize: 20 }}>Tu carrito se encuentra vacío</Text>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ backgroundColor: '#ea044d', borderRadius: 5, padding: 10, marginVertical: 30 }}
            >
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Ir al menú</Text>
            </TouchableOpacity>
        </View>
    )
}