import React, { useContext } from 'react'
import { View, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import OrderContext from '../context/Order/OrderContext';

export const CustomAlert = ({ saucer }) => {

    const {deleteSoucer} = useContext(OrderContext);
    const { name } = saucer;
    const navigation = useNavigation();
    return (
        <View>
            {
                Alert.alert(
                    `Deseas eliminar el platillo ${saucer}?`,
                    [
                        {
                            text: 'Confirmar',
                            onPress: () => {
                                {/* Eliminar el platillo de la orden */}
                                deleteSoucer()
                            }

                        },
                        {
                            text: 'Cancelar',
                            style: 'cancel'
                        }
                    ]

                )
            }
        </View>
    )
}