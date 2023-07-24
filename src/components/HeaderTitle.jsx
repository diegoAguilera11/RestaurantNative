import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../themes/customStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const HeaderTitle = ({ title }) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}