import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { listStyles } from '../themes/customStyles';
import { useNavigation } from '@react-navigation/core'


export const SaucerItem = ({ saucer }) => {
  const navigation = useNavigation();
  const { id, name, price, category, description, image } = saucer;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('SaucerDetail', {saucer})}
    >
      <View style={listStyles.container}>
        <View style={listStyles.cotainerSaucer}>
          <Text style={listStyles.titleSaucer}>{name}</Text>
          <Text style={listStyles.priceSaucer}>${price}</Text>
          <Text style={listStyles.desriptionSaucer}>{description}</Text>
        </View>

        <View style={listStyles.cotainerImage}>
          <Image style={listStyles.image} source={{ uri: image }} />
        </View>
      </View>
    </TouchableOpacity>
  )
}