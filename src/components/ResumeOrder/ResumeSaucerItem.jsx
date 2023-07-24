import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { resumeListStyles } from '../../themes/customStyles';
import { useNavigation } from '@react-navigation/core'
import { formatearCantidad } from '../../helpers';
import OrderContext from '../../context/Order/OrderContext';

export const ResumeSaucerItem = ({ saucer }) => {
    const navigation = useNavigation();
    const { deleteSoucerOrder } = useContext(OrderContext)
    const { id, name, price, category, description, image, quantity, saucerTotal } = saucer;

    const deleteAlert = () => {
        Alert.alert(
            `¿Deseas eliminar el producto ${name}?`,
            '',
            [
                {
                    text: 'Confirmar',
                    onPress: () => deleteSoucerOrder(id),
                },
                {
                    text: 'Cancelar',
                    onPress: () => console.log('cancelar'),
                    style: 'cancel'

                }
            ]
        );
    }

    return (
        <View style={resumeListStyles.container}>
            <View style={resumeListStyles.cotainerImage}>
                <Image style={resumeListStyles.image} source={{ uri: image }} />
            </View>
            <View style={resumeListStyles.cotainerSaucer}>
                <Text style={resumeListStyles.titleSaucer}>{name}</Text>
                <Text style={resumeListStyles.priceSaucer}>Precio: ${price}</Text>
                <Text style={resumeListStyles.priceSaucer}>Cantidad:{quantity}</Text>
            </View>

            <View style={{ alignItems: 'center', gap: 10 }}>
                <TouchableOpacity
                    onPress={deleteAlert}
                >
                    <View style={{ height: 40, width: 40, backgroundColor: 'red', borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>X</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 15 }}>{formatearCantidad(saucerTotal)}</Text>
            </View>
        </View>
    )
}