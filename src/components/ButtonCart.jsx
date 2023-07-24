import React, { useContext } from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import OrderContext from '../context/Order/OrderContext';
import { useNavigation } from '@react-navigation/core'

export const ButtonCart = () => {

    const { order } = useContext(OrderContext);
    const { width, height } = Dimensions.get('screen');
    const navigation = useNavigation();
    const uriCart = 'https://firebasestorage.googleapis.com/v0/b/restaurant-cebf6.appspot.com/o/shopping-cart.png?alt=media&token=35bf1e30-c725-4e85-a271-97ca4be26d5f';

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ResumeOrder')}
        >
            <View style={{ width: (width / 4.5), height: (height / 10), flexDirection:'column', justifyContent: 'center'}}>
                <View style={{ left: (width / 5), top: (height / 120), width: (width / 17), height: (height / 40), backgroundColor: '#FFF', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: '#000' }}>
                        {order.length}
                    </Text>
                </View>
                <Image style={{ width: 35, height: 35, marginLeft: 45 }} source={{ uri: uriCart }} />
            </View>
        </TouchableOpacity>
    )
}
